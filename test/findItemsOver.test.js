let assert = require("assert");
let findItemsOver = require("../findItemsOver");


describe('findItemsOver', function (list, threshold) {
    it('should find items over a certain qauntity threshold(30)', function () {
        var threshold = 30
        var list = [
            { name: 'apples', qty: 10 },
            { name: 'pears', qty: 37 },
            { name: 'bananas', qty: 27 },
            { name: 'apples', qty: 3 },
        ];
        assert.deepEqual([{ name: "pears", qty: 37 }], findItemsOver(list, threshold));
    });
    it('should find pear qauntity which is over 20', function () {
        var threshold = 20
        var list = [
            { name: 'apples', qty: 10 },
            { name: 'pears', qty: 37 },
            { name: 'bananas', qty: 16 },
            { name: 'apples', qty: 3 },
        ];
        assert.deepEqual([{ name: "pears", qty: 37 }], findItemsOver(list, threshold));
    });
    it('should find no quantity over 20', function () {
        var threshold = 40
        var list = [
            { name: 'apples', qty: 10 },
            { name: 'pears', qty: 17 },
            { name: 'bananas', qty: 3},
            { name: 'apples', qty: 3 },
        ];
        assert.deepEqual([],findItemsOver(list, threshold));
    });

});