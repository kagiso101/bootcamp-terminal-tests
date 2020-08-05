let assert = require("assert");
let isWeekday = require("../isWeekday");


describe('isWeekday is working fine', function () {
    it('should return true for Tuesday as it is a weekday', function () {
        assert.equal(true, isWeekday("Tuesday"))
    });
    it('should return true for Monday as it is a weekday', function () {
        assert.equal(true, isWeekday("Monday"))
    });
    it('should return false for Sunday as it is not a weekday', function () {
        assert.equal(false, isWeekday("Sunday"))
    });
});