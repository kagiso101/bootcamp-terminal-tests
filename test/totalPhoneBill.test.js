let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");


describe('totalPhoneBill is working fine' , function(){
    it('should return totalPhoneBill for an sms' , function(){
        var sms = "sms";
        assert.equal(totalPhoneBill("sms"), 'R'+0.65);
    });
    it('should return totalPhoneBill for 1 call' , function(){
        var call = "call";
        assert.equal(totalPhoneBill("call"), "R"+2.75);
    });
});