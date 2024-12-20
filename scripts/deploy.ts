import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Get the contract factory
  const ZombieFactory = await ethers.getContractFactory("ZombieFactory");

  // Deploy the contract
  const zombieFactory = await ZombieFactory.deploy();
  console.log("ZombieFactory contract deployed to:", zombieFactory.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
