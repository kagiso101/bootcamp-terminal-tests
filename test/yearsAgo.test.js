let assert = require("assert");
let yearsAgo = require("../yearsAgo");


describe('yearsAgo is working fine' , function(years){
    it('should return 20 years ago as 2000 was 20 years ago' , function(){
        var years = 2000
        assert.equal(yearsAgo(years),20)
    });
    it('should return 19 years ago as 2001 was 19 years ago' , function(){
        var years = 2001
        assert.equal(yearsAgo(years),19)
    });
    it('should return 10 years ago as 2010 was 10 years ago' , function(){
        var years = 2010
        assert.equal(yearsAgo(years),10)
    });
});