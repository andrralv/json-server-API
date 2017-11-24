var express = require('express');
var web3 = require('web3');
var bodyParser = require('body-parser');
var truffle = require('truffle-contract');
web3 = new web3();
var app = express();

web3.setProvider(new web3.providers.HttpProvider('40.68.248.100:30303'));
var balance = web3.eth.blockNumber;

/* GET users listing. */
app.get('/', function(req, res, next) {
  res.sendFile("index.html");
});

/* GET users listing. */
app.post('/', function(req, res, next) {
  res.json({"HELLO": req.body.THREE, "BALANCE": balance, "TEST": "True"});
});

module.exports = router;
