// require("@nomicfoundation/hardhat-toolbox");
require('hardhat-deploy');
require("dotenv").config()
// require("@nomiclabs/hardhat-ethers")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("@nomiclabs/hardhat-waffle")
// require("@nomicfoundation/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: {
        compilers: [
            {
                version: "0.8.20",
            },
            {
                version: "0.6.6",
            },
        ],
    },
  networks:{
  },
  hardhat: {

  },
  sepolia: {
    url: "https://eth-sepolia.g.alchemy.com/v2/rhFU6gtSqgHTwV2ImBhPCREANGrsZmma" ,
    accounts: ['63c1bde234ec7eea0d23064a18e4003ce9dfec4a742cbd1b8e3b58ac33969ab0']
  },
  namedAccounts: {
    deployer: {
        default: 0, 
    },
    },
};
