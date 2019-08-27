var express = require('express');
var router = express.Router();
var accountController = require('../controllers/account');

/* GET users listing. */
router.get('/', accountController.index);

module.exports = router;
