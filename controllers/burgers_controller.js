var Burger = require('../models/burger');
var Customer = require('../models/customer');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    Burger.findAll(
        {include: [{model: Customer, as: 'customer'}]}
    ).then(burgers => {
        res.render('index', {burgers: burgers});
    });
});

router.post("/burgers", function(req, res) {
    Burger.create(req.body).then(burger => {
        res.redirect("/");
    });
});

router.put("/burgers/:burger_id", function(req, res) {
    Customer.findOrCreate({
        where: {customer_name: req.body.customer_name},
        defaults: {customer_name: req.body.customer_name}
    }).spread((customer, created) => {
        Burger.findById(req.params.burger_id).then(function (burger) {
            burger.devoured = 1;
            burger.customerId = customer.id;
            burger.save();
            res.redirect("/");
        })
    });
});

module.exports = router;
