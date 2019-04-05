const bdEstado = require('../db.fake/bd.estado.fake');

class Estados {
  constructor(ch) {
    this.ch = ch;
    this.init();
  }

  init() {
    let self = this;
    console.log('Init fila estado')
    const nomeDaFila = 'rpc_estados';

    self.ch.assertQueue(nomeDaFila, { durable: false });
    self.ch.prefetch(1);

    self.ch.consume(nomeDaFila, function reply(msg) {


      self.ch.sendToQueue(msg.properties.replyTo,
        new Buffer.from(JSON.stringify(bdEstado.buscaEstados())),
        { correlationId: msg.properties.correlationId });

      self.ch.ack(msg);
    });

  }
}

module.exports = Estados;