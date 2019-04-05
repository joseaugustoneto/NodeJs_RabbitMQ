const express = require('express');
const amqp = require('amqplib/callback_api');
const uuid = require('uuid');

const router = express.Router();


router.get('/', (req, res, next) => { // get `/api/v2/estados`
  amqp.connect('amqp://localhost', (err, conn) => {
    conn.createChannel((err, ch) => {
      ch.assertQueue('', { exclusive: true }, (err, q) => {

        const corr = uuid();

        ch.consume(q.queue, (msg) => {
          if (msg.properties.correlationId === corr) {

            let estados = JSON.parse(msg.content.toString());
            Promise.all(estados.map(e => {
              return getPopulacaoEstado(e);
            })).then((estadosComPopulacao) => {
              res.json({ estados: estadosComPopulacao });
            })

          }
        }, { noAck: true });

        ch.sendToQueue('rpc_estados',
          new Buffer(''),
          { correlationId: corr, replyTo: q.queue });


        function getPopulacaoEstado(e) {
          return new Promise((resolve, reject) => {
            ch.assertQueue('', { exclusive: true }, (err, q) => {
              ch.consume(q.queue, (msg) => {
                if (msg.properties.correlationId === corr) {
                  let populacao = JSON.parse(msg.content.toString())
                  resolve(Object.assign(e, populacao));
                }
              }, { noAck: true });

              ch.sendToQueue('rpc_populacao',
                new Buffer(e.uf),
                { correlationId: corr, replyTo: q.queue });
            })
          })
        }
      });
    });
  });
});


module.exports = router;