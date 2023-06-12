import { ethers } from "hardhat";
import { LedgerSigner } from "@anders-t/ethers-ledger";

async function main() {
  const deployer = await ethers.getSigner(
    "0x1234567890123456789012345678901234567890"
  );

  const address = await deployer.getAddress();
  const accountBalance = await deployer.getBalance();
  const gasPrice = await ethers.provider.getGasPrice();

  console.log("Deploying contracts by account:", address);
  console.log("Account balance:", ethers.utils.formatEther(accountBalance));
  console.log("Gas price:", ethers.utils.formatEther(gasPrice));

  const factory = await ethers.getContractFactory("SampleContract", deployer);

  const derivationPath = "m/44'/60'/0'/0/0";
  const ledger = await new LedgerSigner(
    factory.signer.provider,
    derivationPath
  );
  const hardwareFactory = await factory.connect(ledger);

  const sampleContract = await hardwareFactory.deploy("Hello World");
  console.log(
    "Transaction started with hash:",
    sampleContract.deployTransaction.hash
  );

  await sampleContract.deployed();
  console.log("Contract deployed to:", sampleContract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
