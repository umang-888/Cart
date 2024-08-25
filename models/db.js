
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://umangmittal777:123321@cluster0.u3zon.mongodb.net/', {
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

