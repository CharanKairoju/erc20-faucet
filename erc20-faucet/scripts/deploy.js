const hre = require("hardhat");

async function main() {
  const Token = await hre.ethers.getContractFactory("MyToken");
  const token = await Token.deploy(1000000);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
