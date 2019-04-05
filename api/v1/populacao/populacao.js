var express = require('express');
const bdPopulacao = require('../../../db.fake/bd.populacao.fake');
var router = express.Router();


router.get('/:uf', (req, res, next) => {
  res.status(200).json(bdPopulacao.getEstadoPorSigla(req.params.uf))
})

module.exports = router;