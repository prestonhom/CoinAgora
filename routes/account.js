var express = require('express');
var router = express.Router();
var accountController = require('../controllers/account');

/* GET users listing. */
router.get('/account', accountController.show);
router.get('/trade', accountController.new);
// router.get('/account/:id/new', accountController.new);
// router.post('/trade', accountController.create)



module.exports = router;
