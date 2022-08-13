require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const dotenv = require("dotenv");
const result = dotenv.config();
if (result.error) {
  throw result.error;
}

module.exports ={
    solidity:"0.8.9",
    networks: {
      goerli: {
        url: process.env.ALCHEMY_API_URL,
        accounts: [process.env.GOERLI_PRIVATE_KEY]
      }
    },
    etherscan: {
        apiKey: {
          goerli: process.env.ETHERSCAN_API_KEY,
        },
    }
};
