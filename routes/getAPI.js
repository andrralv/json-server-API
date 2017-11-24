//express libs
var express = require('express');
var bodyParser = require('body-parser');

//web3 & contracts libs
var web3 = require('web3');
web3 = new web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
var contracts = [];
var TruffleContract = require('truffle-contract');
var SensorABI = require('../build/contracts/Sensor.json');

//contracts init
contracts.Sensor = TruffleContract(SensorABI);
contracts.Sensor.setProvider(web3.currentProvider);

//express app
var app = express();
var router = express.Router();
const path = require('path');

/* THIS API READS FROM THE BLOCKCHAIN AND SERVES TO MACHINE LEARNING SERVICE */
router.get('/', function (req, res) {
  contracts.Sensor.deployed().then(instance=>{
    return instance.sensorData(web3.eth.accounts[0]);
  }).then(result=>{
    res.json(
      {
          "blockNumber": web3.eth.blockNumber,
          "data" : result
      }
    );
  }).catch(error => { 
    console.log('error', error);
    res.json({"error":error.message});
  });
});

module.exports = router;
