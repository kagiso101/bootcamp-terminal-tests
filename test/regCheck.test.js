let assert = require("assert");
let regCheck = require("../regCheck");


describe('regCheck is working fine', function (regNumber, province) {


    it('should return true for CY', function () {
        var province = "CY";
        var regNumber = "DV 23 LP CY"
        assert.equal(true, regCheck(regNumber, province))
    });
    it('should return false for ND', function () {
        var province = "CY"
        var regNumber = "DV 23 LP ND"
        assert.equal(false, regCheck(regNumber, province))
    });
    it('should return false for  MP', function () {
        var province = "CY"
        var regNumber = "DV 23 LP MP"
        assert.equal(false, regCheck(regNumber, province))
    });
 
});