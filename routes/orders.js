var express = require('express');
var router = express.Router();
var orderController = require('../controllers/order');


router.get('/orders', orderController.index);
router.get('/orders/:id', orderController.show);



// router.post('/trade', orderController.bid)



module.exports = router;