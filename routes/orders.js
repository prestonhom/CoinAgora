var express = require('express');
var router = express.Router();
var orderController = require('../controllers/order');



router.get('/orders', orderController.index)

module.exports = router;