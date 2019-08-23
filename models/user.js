const mongoose = require('mongoose');
const Schema = mongoose.Schema; 


var userSchema = new Schema({
    name: String,
    email: String,
    avatar: String,
    googleId:String,
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