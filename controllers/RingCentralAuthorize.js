'use strict';

// Dependencies
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var RC = require('ringcentral');

// Setup
router.use(bodyParser.urlencoded({ extended: true }));
router.use(methodOverride(function( req, res ) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}));

// Vars
var sdk = new RC({
  server: process.env.RC_API_SERVER,
  appKey: process.env.RC_APP_KEY,
  appSecret: process.env.RC_APP_SECRET
});

var platform = sdk.platform();

// Handlers
function handleRedirectPost( req, res, next ) {
  res.render('dashboard', {});
}

function handleOpenSSO( req, res, next ) {
  var authUrl = platform
    .authUrl({
      redirectUri: process.env.RC_APP_REDIRECT_URI,
      prompt: 'login consent',
      state: process.env.RC_APP_AUTH_STATE
    });

  res.status(200).send(JSON.stringify({url: authUrl}));
}

function authorize( req, res, next ) {
  try {
    var qs = req.query;
    if( !qs.hasOwnProperty('code') || process.env.RC_APP_AUTH_STATE !== qs.state ) {
      throw new Error('Either code is missing or states do not match');
    } else {
      // NOTE THIS IS BOLTED ON BECAUSE OF AN ISSUE WITH THE RINGCENTRAL JS SDK VERSION 2
      qs.redirectUri = process.env.RC_APP_REDIRECT_URI;

      platform
        .login(qs)
        .then(function(data) {
          //res.status(200).send(data);
          res.render('dashboard');
        })
        .catch(function(e) {
          res.send(e);
          throw(e);
        });
    }
  } catch(e) {
    console.error(e);
    throw(e);
  }
}

// Bootstrap Platform and Subscription
var platform = sdk.platform();

router.use(function( req, res, next ) {
  next();
});

router.route('/redirect')
  .all(function( req, res, next ) {
    next();
  })
  .get(authorize)
  .post(handleRedirectPost);

router.route('/url')
  .all(function( req, res, next ) {
    next();
  })
  .get(handleOpenSSO);

module.exports = router;
