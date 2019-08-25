var express = require('express');
var router = express.Router();
var orderController = require('../controllers/index');



router.get('/', orderController.order)
module.exports = router;