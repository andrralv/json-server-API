pragma solidity ^0.4.18;

contract Sensor {

    mapping(address => int) public sensorData;

    function putData(int _data) public {
        sensorData[msg.sender] = _data;
    }
}