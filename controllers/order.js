const Account = require('../models/account');
const Order = require('../models/order')

module.exports ={
    index,
    show,
    remove,
    update,
    edit,
    
}
function show(req,res){
    Order.findById(req.params.id, function(err, order){
        res.render('orders/show', {
            order,
            user: req.user
        })
    })
}

function remove(req,res){
    Order.findOneAndDelete({_id:req.params.id})
        .exec(function(err){
        res.redirect('/orders');
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

function update(req,res){
    Order.findByIdAndUpdate(req.params.id, req.body, function(err){
            if(err){
                res.render('orders/edit')
            }else{
                res.redirect('/orders')
        }
    })
}

function edit(req,res){
    console.log(req.params.id);
    Order.findById({_id:req.params.id},function(err,orders){
        res.render('orders/edit', {
            orders,
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
