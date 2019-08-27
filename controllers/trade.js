const Account = require('../models/account');

module.exports= {
    index
    // show,
    // createBid,
    // createAsk,
}

function index(req,res){
    Account.find({}, function(err,users){
        // Order.find({}, function(err,orders){
        //     if(orders > 0){
        //         res.render()
        //     }
        // })
        
        
        
        res.render('trade/index', {
            title: 'Coin Agora',
            users,
            user: req.user
        })
    })
}

// function show(req,res){
    
// }