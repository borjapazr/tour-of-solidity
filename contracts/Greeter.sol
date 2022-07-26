// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4;

import "hardhat/console.sol";

contract Greeter {
    string private _greeting;

    constructor(string memory _greetingMessage) {
        console.log("Deploying a Greeter with greeting:", _greeting);
        _greeting = _greetingMessage;
    }

    function greet() public view returns (string memory) {
        return _greeting;
    }

    function setGreeting(string memory _greetingMessage) public {
        console.log("Changing greeting from '%s' to '%s'", _greeting, _greetingMessage);
        _greeting = _greetingMessage;
    }
}
