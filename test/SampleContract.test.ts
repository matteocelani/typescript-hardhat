import { expect } from "chai";
import { ethers } from "hardhat";
import { SampleContract } from "../typechain-types";

describe("SampleContract", function () {
  let SampleContract: SampleContract;

  before(async function () {
    SampleContract = await ethers.deployContract("SampleContract", [
      "Initial message",
    ]);
    SampleContract = await SampleContract.waitForDeployment();
  });

  describe("Deployment", function () {
    it("Should set the right initial message", async function () {
      expect(await SampleContract.message()).to.equal("Initial message");
    });
  });

  describe("Update", function () {
    it("Should emit event and change message", async function () {
      await expect(SampleContract.update("New message"))
        .to.emit(SampleContract, "UpdatedMessages")
        .withArgs("Initial message", "New message");
      expect(await SampleContract.message()).to.equal("New message");
    });
  });
});
