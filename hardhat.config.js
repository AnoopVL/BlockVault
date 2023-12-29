require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainID: 31337,
    },
    mumbai: {
      url: process.env.POLYGON_MUMBAI_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 80001,
    },
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
};
