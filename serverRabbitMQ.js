const Estados = require('./filas/estados')
const Populacao = require('./filas/populacao')
const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (err, conn) => {
  conn.createChannel((err, ch) => {
    new Estados(ch);
    new Populacao(ch);
  });
});