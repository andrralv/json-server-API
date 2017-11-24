var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var web3 = require('web3');
var truffle = require('truffle-contract');

var Sensor = require('./build/contracts/Sensor.json')
;
var get = require("./routes/getAPI.js");
var post = require("./routes/postAPI.js");

web3 = new web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

var app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json({type: 'application/json'}));
app.use(cookieParser());

app.get('/', get);
app.post('/', post);

module.exports = app;


