require("dotenv").config()
const BENEFICARY_ADDRESS = process.env.BENEFICARY_ADDRESS

async function main() {
    const token = await ethers.getContractFactory(
        "BukusToken", 
        "BOKOS", 
        1000000000,
        BENEFICARY_ADDRESS 
    )
    // Start deployment, returning a promise that resolves to a contract object
    const token = await token.deploy()
    console.log("Contract deployed to address:", token.address)
  }

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
  