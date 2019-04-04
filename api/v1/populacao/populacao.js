var express = require('express');
var router = express.Router();


router.get('/:uf', (req, res, next) => {
  res.status(200).json(getEstadoPorSigla(req.params.uf))
})

function getEstadoPorSigla(uf) {
  return require('../../db.fake/bd.populacao.fake').filter((p) => p.uf.toLowerCase() === uf.toLowerCase())[0] || {};
}

module.exports = router;