/*Inside the `burgers_controller.js` file, import the following:
* Express
* `burger.js` */

// Node Dependencies
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


// Index Redirect Route
router.get('/', function (req, res) {
  res.redirect('/index');
});

// Index Page Route (render all burgers to DOM)
router.get('/index', function (req, res) {
  burger.selectAll(function(data) {
    var hbsObject = { burgers: data };
    //console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

// Create a New Burger:
router.post('/burger/create', function (req, res) {
  burger.insertOne(req.body.burger_name, function() {
    res.redirect('/index');
  });
});

// Devour a Burger:
router.post('/burger/eat/:id', function (req, res) {
  burger.updateOne(req.params.id, function() {
    res.redirect('/index');
  });
});

/* 4. Create the `router` for the app, and export the `router` at the end of your file. */
module.exports = router;