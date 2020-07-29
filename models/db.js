
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://customer:Welcome@123@cluster0.sd2h6.mongodb.net/itemdb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {
        console.log("Mongoose Connected");
    } else {
        console.log('Error while connecting', err);
    }
});

require('./item');
require('./contact');

