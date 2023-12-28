require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
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
      url: "https://polygon-mumbai.g.alchemy.com/v2/MsEcJAPhO0hpebv2_7zALSS-z05YDkEc",
      accounts: [
        "6aefba6ebe2544fd21ff17617bd2c0760b49cd121cbb62d6b7f14ee90fe0292f",
      ],
      chainId: 80001,
    },
    // mumbai: {
    //   url: process.env.POLYGON_MUMBAI_URL,
    //   accounts: [process.env.PRIVATE_KEY],
    //   chainId: 80001,
    // },
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
};
