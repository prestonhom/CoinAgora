const Account = require('../models/account');
const Order = require('../models/order')

module.exports ={
    index,
    show
    // bid
    // ask
    // create,
}
function show(req,res){
        Order.findById(req.params.id, function(err, order){
            res.render('orders/show', {
                order,
                user: req.user
            })
        })
}
function index(req,res){
    Order.find({}, function(err, allOrder){
        res.render('orders/index', {
            allOrder,
            user:req.user
        })
    })
}


// function show(req,res){
//     Order.findById({},function(err,account){
//         res.render('trade/index')
//     })
// }

// function create(req,res){
//     Account.findById(req.order._id, function(err, order ){
//         res.render('trade/index', {

//         })
//     })
// }

// function bid(req,res){
//     Order.findById(req.user._id, function(err,coin){
//         console.log(bid)
//         res.redirect('/trade')
//         })
// }
