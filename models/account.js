const mongoose = require('mongoose');
const Schema = mongoose.Schema; 


var accountSchema = new Schema({
    name: String,
    email: String,
    avatar: String,
    googleId:String,
    btc:{
        type:Number,
        default: 100
    },
    eth:{
        type:Number,
        default: 100
    },
    },{
    timestamps:true
})
    

module.exports = mongoose.model('Account', accountSchema)