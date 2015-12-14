'use strict';

// Dependencies
var express = require('express');
var router = express.Router();
// TODO: Add abstraction layer for persisting data
//var mongoose = require('mongoose');

// Uncomment to add Basic Auth for protected routes
//var bauth = require('../middleware/basicAuth');

// Uncomment to Call on middleware to load user for Basic Auth
//var basicAuth = bauth.basicAuth(process.env.BASIC_AUTH_USERNAME, process.env.BASIC_AUTH_PASSWORD);

// Connect to Mongo
/*
mongoose.connect( process.env.MONGOLAB_URI, function( err, db ) {
  if( err ) {
    throw err;
  }

  // TODO: Handle db better than currently doing
});

// TODO: Refactor with promise-based structure to load only what is needed
mongoose.connection.on('open', function() {
  console.log( 'MongoDB connection opened successfull...' );

  // Load Controllers
  var RingCentralProxy = require('./ringCentralController');

  // Routing
  router.use('/rc', RingCentralProxy);

});
*/

/* PAGE RENDERING FOR PUBLIC ROUTES */
// Default view
router.get('/', function( req, res ) {
  res.render('index', {
    title: 'RingCentral Demo App'
  });
});

module.exports = router;
