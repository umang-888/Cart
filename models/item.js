
const mongoose = require('mongoose');

let itemSchema = new mongoose.Schema({
    name: {
        type: String
    },
    discount: {
        type: Number
    },
    cost: {
        type: Number
    },
    quantity: {
        type: Number
    },
    size: {
        type: String
    },
    url: {
        type: String
    }
});

const item = mongoose.model('Item', itemSchema);
module.exports = item;
