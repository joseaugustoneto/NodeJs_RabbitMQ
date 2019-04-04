const express = require('express');
const router = express.Router();

const estadoRouters = require('./estado/estado');
const populacaoRouters = require('./populacao/populacao');

router.use('/estados', estadoRouters);
router.use('/populacao', populacaoRouters);

module.exports = router;