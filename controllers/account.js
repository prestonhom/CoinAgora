const Account = require('../models/account');

module.exports= {
    index,
    
   
   
}

function index(req,res){
    Account.find({_id: req.user.id}, function(err,account){
        console.log(account);
        res.render('account/index', {
            title: 'Coin Agora',
            account: account[0],
            user: req.user
        })
    })
}

