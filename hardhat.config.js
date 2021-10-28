/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require('dotenv').config();
 require("@nomiclabs/hardhat-ethers");
 require("@nomiclabs/hardhat-etherscan")

 const { ALCHEMY_URL, PRIVATE_KEY, ETHERSCAN_API} = process.env;

 module.exports = {
    solidity: "0.8.0",
    defaultNetwork: "kovan",
    networks: {
       hardhat: {},
       kovan: {
          url: ALCHEMY_URL,
          accounts: [`${PRIVATE_KEY}`]
       }
    },
    etherscan: {
       apiKey: ETHERSCAN_API
     }
 }