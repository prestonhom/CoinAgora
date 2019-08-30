const mongoose = require('mongoose');
const Schema = mongoose.Schema; 


// var bidSchema = new Schema({
    
//     amount:{
//         type: Number,
//         min:0
//     },
//     coin:{
//         enum:['btc', 'eth']
//     },
//     account:{
//         type: Schema.Types.ObjectId,
//         ref: 'Account'
//     }
// })

// var askSchema = new Schema({
//     amount:{
//         type: Number,
//         min:0
//     },
//     coin:{
//         enum:['btc', 'eth']
//     },
//     account:{
//         type: Schema.Types.ObjectId,
//         ref: 'Account'
//     }
// })
var orderSchema = new Schema({
    bid:{
        type: Number,
        default: 2
        
    },
    coin:{
        type:String,
        enum:['btc','eth'],
    },
    orderType:{
        type:String,
        enum:['buy','sell'],
        default: 'buy'
    },
    account:{
        type: Schema.Types.ObjectId,
        ref: 'Account'
    },
    },{
    timestamps:true
})

module.exports = mongoose.model('Order', orderSchema)