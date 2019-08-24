const User = require('../models/user');

module.exports= {
    index
}

function index(req,res){
    User.find({}, function(err,users){
        res.render('users/index', {
            title: 'Coin Agora',
            users,
            user: req.user
        })
    })
}