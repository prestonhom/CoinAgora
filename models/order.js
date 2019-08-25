const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

var bidSchema = new Schema({
    
    amount:{
        type: Number
    },
    coin:{
        enum:['BTC', 'ETH']
    },
    account:{
        type: Schema.Types.ObjectId,
        ref: 'Account'
    }
})

var askSchema = new Schema({
    amount:{
        type: Number
    },
    coin:{
        enum:['BTC', 'ETH']
    },
    account:{
        type: Schema.Types.ObjectId,
        ref: 'Account'
    }
})
var orderSchema = new Schema({
    type:{
        enum:['OPEN']
    },
    bid: [bidSchema],
    ask: [askSchema]
})