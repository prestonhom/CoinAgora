const Account = require('../models/account');

module.exports= {
    show,
    new: newTrade
    // trade
}

function show (req,res){
    // if(!req.user.id){
    //     res.status(401).send('Please login first');
    // }
    Account.findById(req.user._id, function(err, account){
        console.log(account);
        res.render('account/index', {
            title: 'Coin Agora',
            account,
            user: req.user
        })
    })
}

function newTrade(req,res){
    Account.findById(req.user._id, function(err,account){
        res.render('trade/index',{
            account,
            user:req.user
        })
    })
}

// function trade(req,res){
//     var order = new Order(req.body);
//         order.save(function(err){
//             if(err)
//             return res.render('trade/index');
//         })
//     res.redirect('/orders')

// }


