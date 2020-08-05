let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe('countRegNumber is working fine', function () {
    it('should return true for CA 182736', function () {
        assert.equal(true, countRegNumber("CA 182736"))
    });
    it('should return true for CY 523519', function () {
        assert.equal(true, countRegNumber("CY 523519"))
    });
    it('should return true for CJ 812328', function () {
        assert.equal(true, countRegNumber("CJ 812328"))
    });
    it('should return true for CA 182736', function () {
        assert.equal(true, countRegNumber("CA 182736"))
    });
});