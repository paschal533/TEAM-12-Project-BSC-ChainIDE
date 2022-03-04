require('@nomiclabs/hardhat-waffle');
let secret = require("./secret.json")

module.exports = {
  solidity: '0.8.3',
  networks: {
    testnet: {
      url: secret.url,
      accounts: [secret.key],
    },
  },
};
