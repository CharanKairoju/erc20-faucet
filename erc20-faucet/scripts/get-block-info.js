const { Network, Alchemy } = require("alchemy-sdk"); // Use require in Hardhat scripts by default

async function main() {
  const settings = {
    apiKey: "zY-ggNdwXfLtRkONieCee0-KZXs8uYO3", // Replace with your Alchemy API Key.
    network: "https://eth-sepolia.g.alchemy.com/v2/zY-ggNdwXfLtRkONieCee0-KZXs8uYO3", // Replace with your network.
  };
  const alchemy = new Alchemy(settings);

  const block = await alchemy.core.getBlock(15221026);
  console.log(block);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });