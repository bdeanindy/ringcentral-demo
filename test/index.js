// Server controls for tests
var boot = require('../app').boot;
var shutdown = require('../app').shutdown;
var port = require('../app').port;

// Dependencies
var superagent = require('superagent');
var expect = require('expect.js');

// Tests
describe('server', function() {
  before(function() {
    boot();
  });
});
