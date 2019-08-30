const Account = require('../models/account');
const Order = require('../models/order');

module.exports= {
    show,
    new: newTrade,
    create
    
    // trade
}
//displays one
function show (req,res){
    Account.findById(req.user._id, function(err, account){
        // console.log(account);
        res.render('account/index', {
            account,
            user: req.user
        })
    })
}
//displays the trade index page
function newTrade(req,res){
    Account.findById(req.user._id, function(err, account){
        res.render('trade/index',{
            account,
            user:req.user
        })
    })
}
// creates new instance of an 'Order'
function create(req,res){
    var order = new Order(req.body);

    order.save(function(err, savedOrder){
        if(err) {
            return res.redirect('/trade')
        }else {
            Account.findById()
        return res.redirect(`/orders/${savedOrder._id}`);
        }
    })
}


