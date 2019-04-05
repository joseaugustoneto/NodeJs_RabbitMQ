const bdPopulacao = require('../db.fake/bd.populacao.fake');

class Populacao {
  constructor(ch) {
    this.ch = ch;
    this.init();
  }

  init() {
    let self = this;
    console.log('Init fila populacao')
    const nomeDaFila = 'rpc_populacao';

    self.ch.assertQueue(nomeDaFila, { durable: false });
    self.ch.prefetch(1);

    self.ch.consume(nomeDaFila, function reply(msg) {

      let siglaEstado = msg.content.toString();

      self.ch.sendToQueue(msg.properties.replyTo,
        new Buffer.from(JSON.stringify(bdPopulacao.getEstadoPorSigla(siglaEstado))),
        { correlationId: msg.properties.correlationId });

      self.ch.ack(msg);
    });

  }
}

module.exports = Populacao;