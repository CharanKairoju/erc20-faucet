require("dotenv").config();

console.log("SEPOLIA_URL from config:", process.env.SEPOLIA_URL);
console.log("PRIVATE_KEY from config:", process.env.PRIVATE_KEY);

require("@nomicfoundation/hardhat-ethers");

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
