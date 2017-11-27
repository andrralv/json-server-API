//express libs
var express = require('express');
var bodyParser = require('body-parser');

console.log();
var VIN1 = require('../json/VIN1.json');
var VIN2 = require('../json/VIN2.json');
var jsonFiles = [];
jsonFiles.push(VIN1);
jsonFiles.push(VIN2);


//express app
var app = express();
var router = express.Router();
const path = require('path');

/* SERVES JSON FILE DEPENDING ON PARAMETER */

router.get('/:vin', function (req, res) {
  var param = req.param("vin")
  console.log(param);
  var file = jsonFiles.filter(function(item) {
    console.log(item);
    return item.history[1].vehicleVIN == param;
  });
  res.json(file);
});

module.exports = router;
