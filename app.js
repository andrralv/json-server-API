var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var web3 = require('web3');
var TruffleContract = require('truffle-contract');

web3 = new web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

var SensorABI = require('./build/contracts/Sensor.json');
var contracts = [];

contracts.Sensor = TruffleContract(SensorABI);
contracts.Sensor.setProvider(web3.currentProvider);

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
        "1234"
    );
    contracts.Sensor.deployed().then(instance=>{
        return instance.putData(Math.floor((Math.random() * 10) + 1), {from: web3.eth.accounts[0]});
    }).then(result=>{
        res.json(
            {
                "blockNumber": web3.eth.blockNumber,
                "result" : result
            }
        );
    }).catch(error => { 
        console.log('error', error);
        res.json({"error":error.message});
    });
        
});

module.exports = app;


