let assert = require("assert");
let transportFee = require("../transportFee");


describe('transportFee is working fine', function () {
    it('should return free for nightshift', function () {
        assert.equal("free", transportFee("nightshift"))
    });
    it('should return R20 for morning', function () {
        assert.equal("R20", transportFee("morning"))
    });
    it('should return R10 afternoon', function () {
        assert.equal("R10", transportFee("afternoon"))
    });
});