const Account = require('../models/account');


module.exports= {
    index,

}
function index(req,res){
    Account.find({}, function(err,account){
        res.render('index', {
            title: 'Coin Agora',
            account,
            user: req.user
        })
    })
}



