let assert = require("assert");
let fromWhere = require("../fromWhere");


describe('fromWhere is working fine', function () {
    it('should return Bellville if regNumber starts with CY', function () {
        assert.equal("Bellville",fromWhere("CY"))
    });
    it('should return Paarl if regNumber starts with CJ', function () {
        assert.equal("Paarl",fromWhere("CJ"))
    });
    it('should return other if regNumb is from some other place', function () {
        assert.equal("Some other place!",fromWhere("other"))
    });
});