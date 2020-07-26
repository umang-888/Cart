
const mongoose = require('mongoose');

let itemSchema = new mongoose.Schema({
    name: {
        type: String
    },
    id: {
        type: Number
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

mongoose.model('Item', itemSchema);