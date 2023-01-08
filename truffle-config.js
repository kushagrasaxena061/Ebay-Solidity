const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
module.exports = {
  networks: {
    "inf_my-ebay_goerli": {
      network_id: 5,
      gasPrice: 100000000000,
      provider: new HDWalletProvider(fs.readFileSync('c:\\Users\\kushp\\Desktop\\ebay\\thingy.env', 'utf-8'), "https://goerli.infura.io/v3/a43b30c7c3e9415ba418962cab0edcdc")
    }
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.8.16"
    }
  }
};
