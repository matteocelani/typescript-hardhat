/**
 * Verify a contract with constructor arguments
 */

import hre from "hardhat";

const contractAddress = "0x9b66D10ACDb115b7A569Ce9d4A34440bC44CB47E";

async function main() {
  await hre.run("verify:verify", {
    address: contractAddress,
    constructorArguments: ["Hello, Hardhat!"],
  });

  console.log("Contract verified!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
