// SPDX-License-Identifier: MIT

pragma solidity >=0.4.22 <0.9.0;

contract HelloFriend {
    address public owner = msg.sender;
    string public message;

    constructor() {
        message = "Hello, friend.";
    }

    function getGreeting() public pure returns (string memory) {
        return "Hello, friend.";
    }
}
