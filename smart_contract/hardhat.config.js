//require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
//hardhat-waffle is plugin to build smart contract tests using Waffle
//https://eth-goerli.g.alchemy.com/v2/zmuVOQfe0WzKJsJMcj4TsUhU_D_dyGdb
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    Goerli:{
      url:'https://eth-goerli.g.alchemy.com/v2/zmuVOQfe0WzKJsJMcj4TsUhU_D_dyGdb',
      accounts: ['3c41e0083e59dab4d5cc7214989af23ec1f7e7b634da63cbb317ae558716c806']
    }
  }
};
