require("dotenv").config()
const BENEFICIARY_ADDRESS = process.env.BENEFICIARY_ADDRESS

// const checksumAddress = ethers.utils.getAddress(BENEFICARY_ADDRESS)
// console.log(checksumAddress)

async function main() {
    // const BENEFICIARY_ADDRESS = process.env.BENEFICIARY_ADDRESS

    // const checksumAddress = ethers.utils.getAddress(BENEFICIARY_ADDRESS)
    // console.log(checksumAddress)
    const token = await ethers.getContractFactory("Token")
    // Start deployment, returning a promise that resolves to a contract object
    const token_ = await token.deploy(
        "BukusToken", 
        "BOKOS", 
        ethers.utils.parseEther('1000000000'),
        BENEFICIARY_ADDRESS
    )
    console.log("Contract deployed to address:", token_.address)
  }

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
  