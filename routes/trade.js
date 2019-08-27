var express = require('express');
var router = express.Router();
var tradeController = require('../controllers/trade');

router.get('/trade', tradeController.index );

module.exports = router;