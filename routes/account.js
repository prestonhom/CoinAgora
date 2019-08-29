var express = require('express');
var router = express.Router();
var accountController = require('../controllers/account');

/* GET users listing. */
router.get('/account', accountController.show);
router.get('/trade', accountController.new);
router.post('/orders', accountController.create)


// router.post('/trade', accountController.create)



module.exports = router;
