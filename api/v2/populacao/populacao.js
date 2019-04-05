const express = require('express');
const amqp = require('amqplib/callback_api');
const uuid = require('uuid');

const router = express.Router();


router.get('/:uf', (req, res, next) => { // get `/api/v2/estados`
  amqp.connect('amqp://localhost', (err, conn) => {
    conn.createChannel((err, ch) => {
      ch.assertQueue('', { exclusive: true }, (err, q) => {

        const corr = uuid();

        ch.consume(q.queue, (msg) => {
          if (msg.properties.correlationId === corr) {
            res.json(JSON.parse(msg.content.toString()));
          }
        }, { noAck: true });

        ch.sendToQueue('rpc_populacao',
          new Buffer(req.params.uf),
          { correlationId: corr, replyTo: q.queue });
      });
    });
  });
});


module.exports = router;