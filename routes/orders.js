var express = require('express');
var router = express.Router();
var orderController = require('../controllers/order');


router.get('/orders', orderController.index);
router.get('/orders/:id', orderController.show);
router.get('/orders/delete/:id', orderController.remove)
router.get('/orders/:id/edit', orderController.edit)
router.put('/orders/:id', orderController.update)







module.exports = router;