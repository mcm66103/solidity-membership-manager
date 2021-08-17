const Membership = artifacts.require("./Membership.sol");

contract("Membership", accounts => {
    before("get instance of contract", async () => {
        this.MembershipInstance = await Membership.deployed();
    });

    it("should set the start date to today on creation", async () => {
        const startDateEpochSeconds = await this.MembershipInstance.startDate.call();
        const date = new Date(startDateEpochSeconds * 1000);

        assert.equal(
            date.toISOString().split("T")[0],
            new Date().toISOString().split("T")[0],
            "The start date did not match the day the contract was created."
        );
    });

    it("should start in an inactive state", async () => {
        const status = await this.MembershipInstance.status.call();

        assert.equal(status, false, "The contract was not initialized with a false status.");
    })
});