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

/* THIS API READS FROM THE BLOCKCHAIN AND SERVES TO MACHINE LEARNING SERVICE */
router.get('/', function (req, res) {
  var url = path.join(__dirname, '/../')
  console.log(url);
  res.sendFile("index.html", {"root": url});
  
});

module.exports = router;
