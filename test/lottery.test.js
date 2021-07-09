const Lottery = artifacts.require("Lottery");

contract("Lottery", (accounts) => {
  describe("contract is created", async () => {
    let lottery = await Lottery.deployed();
    assert.ok(lottery);
  });
});
