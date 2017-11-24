var express = require('express');
var web3 = require('web3');
var bodyParser = require('body-parser');
var truffle = require('truffle-contract');
var app = express();
var router = express.Router();
web3 = new web3();
const path = require('path');

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
var balance = web3.eth.blockNumber;

/* THIS API READS FROM THE QUEUE AND COMMUNICATES WITH BLOCKCHAIN */
router.post('/', function (req, res) {
  if (web3.isConnected()) {
      console.log("Web3: Connection Succesful.")
  } else {
      console.log("Web3: Unable to establish a connection.")
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

module.exports = router;
