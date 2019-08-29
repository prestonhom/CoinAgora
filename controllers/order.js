const Account = require('../models/account');
const Order = require('../models/order')

module.exports ={
    index
    // bid
    // ask
    // create,
}
function index(req,res){
        Order.findById(req.user._id, function(err, orders){
            console.log(orders)
            res.render('orders/index', {
                orders,
                user: req.user
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
