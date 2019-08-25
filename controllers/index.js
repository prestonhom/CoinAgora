const Account = require('../models/account');


module.exports= {
    index,
    order
}

function index(req,res){
    Account.find({}, function(err,users){
        res.render('account/index', {
            title: 'Coin Agora',
            users,
            user: req.user
        })
    })
}

function order(req,res){
    res.render('orders/index',{
        title: 'Coin Agora'
    })
}