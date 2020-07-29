
const mongoose = require('mongoose');

let itemSchema = new mongoose.Schema({

    userId: {
        type: String,
        require: true
    },
    ProductId: {
        type: String,
        require: true
    },
    isWishlist: {
        type: String,
        require: true
    },
    discount: {
        type: Number
    },
    size: {
        type: Number
    },
    itemAmount: {
        type: Number
    },
    itemImageUrl: {
        type: String
    }

});

const item = mongoose.model('Item', itemSchema);
module.exports = item;
