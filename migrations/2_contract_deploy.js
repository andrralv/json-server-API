var Sensor = artifacts.require("./Sensor.sol");

module.exports = function(deployer) {
  deployer.deploy(Sensor);
};
