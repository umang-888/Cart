
const route = require('express').Router();
const mongoose = require('mongoose');
const Item = mongoose.model('Item');
const Contact = mongoose.model('Contact');
const uniqid = require('uniqid');
const contact = require('../models/contact');

// To fetch all the data for given user
route.get('/cart/:userId', (req, res) => {
    Item.find({ userId: req.params.userId })
        .then((items) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(items);
        })
        .catch((err) => {
            res.status(500).send("Error while retrieving the data...");
        })
});

// To Post the data for given user
route.post('/place/:userId/:size', (req, res) => {
    let item = new Item();
    item.userId = req.params.userId;
    item.ProductId = uniqid();
    item.isWishlist = req.body.isWishlist;
    item.discount = req.body.discount;
    item.size = req.params.size;
    item.itemAmount = req.body.itemAmount;
    item.itemImageUrl = req.body.itemImageUrl;
    item.save((err, doc) => {
        if (!err) {
            res.status(201).send(doc);
        } else {
            res.status(501).send(err);
        }
    })
});

// To delete the data of the cart
route.delete('/remove/:ProductId', (req, res) => {
    Item.findOne({ ProductId: req.params.ProductId })
        .then((item) => {
            if (item !== null) {
                item.deleteOne();
                res.statusCode = 200;
                res.setHeader('Content-Type', "text/html");
                res.end('<h1>Item is deleted successfully</h1>')
            }
            else {
                res.status = 404;
                res.setHeader('Content-Type', "text/html");
                res.end('<h1>Item Not Found</h1>')
            }
        })
        .catch((err) => console.log(err))
});

// Value of wishlist get updated when someone click on the wishlist
route.put('/wishlist/:userId/:ProductId/:isWishList', (req, res) => {
    Item.findOneAndUpdate({ ProductId: req.params.ProductId, userId: req.params.userId }, { isWishlist: req.params.isWishList })
        .then(() => {
            Item.findOne({ ProductId: req.params.ProductId })
                .then((item) => {
                    res.send(item);
                })
                .catch((err) => res.send(err));
        })
})

// to post the details about the customer
route.post('/address/:userId/:isWork/:isHome/:isDefault', (req, res) => {
    let contact = new Contact();
    contact.userId = req.params.userId;
    contact.customerName = req.body.customerName;
    contact.customerMobileNumber = req.body.customerMobileNumber;
    contact.customerAddress = req.body.customerAddress;
    contact.customerLocality = req.body.customerLocality;
    contact.customerPincode = req.body.customerPincode;
    contact.customerCity = req.body.customerCity;
    contact.customerState = req.body.customerState;
    contact.isHome = req.params.isHome;
    contact.isWork = req.params.isWork;
    contact.isDefault = req.params.isDefault;
    contact.save((err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            res.send(err);
        }
    })
});

// To get the request of the customer detail
route.get('/address/:userId/:mode', (req, res) => {
    Contact.find({ userId: req.params.userId })
        .then((contacts) => {
            res.setHeader('Content-Type', 'application/json');
            res.send(contacts);
        })
        .catch((err) => {
            res.send("Error while retrieving the contact detail of customer...");
        })
});



exports = module.exports = route;
