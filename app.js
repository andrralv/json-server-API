var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var web3 = require('web3');
var truffle = require('truffle-contract');
web3 = new web3();

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

var app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json({type: 'application/json'}));
app.use(cookieParser());

app.get('/', function (req, res) {
    res.sendFile("index.html", {"root": __dirname});
});

app.post('/', function (req, res) {
    if (web3.isConnected()) {
        console.log("Connection Succesful.")
    } else {
        console.log("Unable to establish a connection.")
    }
    res.json({"HELLO": req.body.THREE, "BALANCE": web3.eth.blockNumber, "TEST": "True"});
    
});

module.exports = app;


