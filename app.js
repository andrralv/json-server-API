var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var get = require("./routes/getAPI.js");

var app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json({type: 'application/json'}));
app.use(cookieParser());

app.use('/', get);

module.exports = app;


