import { ethers } from "hardhat";

async function main() {
  const accounts = await ethers.getSigners();
  const account = accounts[0];

  const accountBalance = await account.getBalance();
  const gasPrice = await ethers.provider.getGasPrice();

  console.log("Deploying contracts by account:", account.address);
  console.log("Account balance:", ethers.utils.formatEther(accountBalance));
  console.log("Gas price:", ethers.utils.formatEther(gasPrice));

  const factory = await ethers.getContractFactory("SampleContract");

  const sampleContract = await factory.deploy('Hello World');
  await sampleContract.deployed();

  console.log("Contract deployed to:", sampleContract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});