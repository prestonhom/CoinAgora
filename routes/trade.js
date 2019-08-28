var express = require('express');
var router = express.Router();
var tradeController = require('../controllers/trade');

router.get('/trade', tradeController.index );
// router.get('/trade/:id/new', tradeController.new);

module.exports = router;