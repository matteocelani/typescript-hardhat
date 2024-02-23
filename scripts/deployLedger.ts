import { ethers } from "hardhat";

async function main() {
  const deployer = await ethers.getSigner(
    "0x1234567890123456789012345678901234567890"
  );

  const balance = await ethers.provider.getBalance(deployer.address);
  const gasPrice = await (await ethers.provider.getFeeData()).gasPrice;

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", ethers.formatEther(balance));
  console.log(
    "Gas price:",
    ethers.formatUnits(gasPrice ? gasPrice : 0, "gwei")
  );

  const contract = await ethers.deployContract("SampleContract", [
    "Hello, Hardhat!",
  ]);
  await contract.waitForDeployment();
  console.log("SampleContract deployed to:", contract.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
