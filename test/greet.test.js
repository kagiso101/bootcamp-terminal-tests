let assert = require("assert");
let greet = require("../greet");

describe('Should greet Kagiso' , function(){
    it('should return Hello, Kagiso' , function(){
        assert.equal("Hello, Kagiso", greet("Kagiso"));
    });

});