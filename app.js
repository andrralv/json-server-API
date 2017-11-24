var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var web3 = require('web3');
var truffle = require('truffle-contract');

var Sensor = require('./build/contracts/Sensor.json');

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
    web3.personal.unlockAccount(
        web3.eth.accounts[0],
        "1234");
    var tx = web3.eth.sendTransaction(
            {
                from: web3.eth.accounts[0],
                to:"0x0093E74f10660FFb20Adfc336a8aAfd08dD9A28C",
                value: web3.toWei(1, 'ether'),
                gasPrice: 20000000000
            }
        );
    res.json(
        {
            "HELLO": req.body.THREE,
            "blockNumber": web3.eth.blockNumber,
            "tx": tx
        }
    );    
});

module.exports = app;


