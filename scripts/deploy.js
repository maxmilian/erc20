const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  // show deployer account
  console.log("Deploying contract with account:", deployer.address);
  // show deployer balance
  console.log("Deployer accout balance:", (await deployer.getBalance()).toString());

  // deploy
  const mhTokenContract = await hre.ethers.getContractFactory("MHCoin");
  const mhTokenDeploy = await mhTokenContract.deploy();
  await mhTokenDeploy.deployed();

  console.log(("MH coin deployed to:"), mhTokenDeploy.address);
  console.log("Deployer account balance:", (await deployer.getBalance()).toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });