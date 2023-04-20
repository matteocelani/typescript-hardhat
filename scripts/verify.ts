/**
 * Verify a contract with constructor arguments
 */

import hre from "hardhat";

const contractAddress = "0x1234567890123456789012345678901234567890";

async function main() {
  await hre.run("verify:verify", {
    address: contractAddress,
    constructorArguments: ["Hello World"],
  });

  console.log("Contract verified!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
