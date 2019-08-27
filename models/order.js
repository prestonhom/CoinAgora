const mongoose = require('mongoose');
const Schema = mongoose.Schema; 


var bidSchema = new Schema({
    
    amount:{
        type: Number,
        min:0
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
        type: Number,
        min:0
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
        enum:['OPEN','FILLED']
    },
    bid: [bidSchema],
    ask: [askSchema]
})

module.exports = mongoose.model('Order', orderSchema)