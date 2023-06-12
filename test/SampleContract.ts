import { ethers } from "hardhat";
import { expect } from "chai";
import { Contract } from "@ethersproject/contracts";

describe("SampleContract", function () {
  let SampleContract: Contract;

  before(async function () {
    const SampleContractFactory = await ethers.getContractFactory(
      "SampleContract"
    );
    SampleContract = await SampleContractFactory.deploy("Initial message");
    await SampleContract.deployed();
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
