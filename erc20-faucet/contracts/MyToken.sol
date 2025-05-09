// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20; // Make sure this matches your hardhat.config.js

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, Ownable {
    constructor(uint256 initialSupply) ERC20("Hades", "HDS") Ownable(msg.sender) {
        _mint(msg.sender, initialSupply);
    }
}