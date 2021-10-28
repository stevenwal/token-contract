require("dotenv").config()
const BENEFICIARY_ADDRESS = process.env.BENEFICIARY_ADDRESS

module.exports = [
    "BukusToken", 
    "BOKOS", 
    ethers.utils.parseEther('1000000000'),
    BENEFICIARY_ADDRESS
];