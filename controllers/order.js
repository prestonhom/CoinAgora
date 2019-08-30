const Account = require('../models/account');
const Order = require('../models/order')

module.exports ={
    index,
    show,
    remove,
    update,
    edit
    
}
//displays all the orders after it has been appended from ceating one in 
function show(req,res){
    Order.findById(req.params.id, function(err, order){
        res.render('orders/show', {
            order,
            user: req.user
        })
    })
}
// uses method override to find an instance that matches the URL/ req.params.id and deletes it
function remove(req,res){
    Order.findOneAndDelete(req.params.id)
        .exec(function(err){
        res.redirect('/orders');
    })
}
//controller that lists all orders
function index(req,res){
    Order.find({}, function(err, allOrder){
        res.render('orders/index', {
            allOrder,
            user:req.user
        })
    })
}
// updates orders
function update(req,res){
    Order.findByIdAndUpdate(req.params.id, req.body, function(err){
            if(err){
                res.render('orders/edit')
            }else{
                res.redirect('/orders')
        }
    })
}
//brings users to show a single order for editing
function edit(req,res){
    Order.findById(req.params.id,function(err,orders){
        res.render(`orders/edit`, {
            orders,
            user:req.user
        })
    })
}

