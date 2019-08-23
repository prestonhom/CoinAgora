var mongoose = require('mongoose');

var 

var userSchema = new mongoose.Schema({
    name: String,
    bitcoinBalance: {
        type: Number,
        default: 10
    },
    ethereumBalance: {
        type: Number,
        default: 20
    },
        timestamps:true
    });

module.exports = mongoose.model('User', userSchema)