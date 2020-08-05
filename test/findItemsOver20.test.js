let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");


describe('findItemsOver20', function () {
    it('should return all items over 20', function () {
        var item = [
            { name: 'apples', qty: 10 },
            { name: 'pears', qty: 37 },
            { name: 'bananas', qty: 27 },
            { name: 'apples', qty: 3 },
        ];
        assert.deepEqual([{ name: 'pears', qty: 37 }, { name: 'bananas', qty: 27 }],findItemsOver20(item))
    });
    it('should find pear qauntity over 30', function () {
        var item = [
            { name: 'apples', qty: 10 },
            { name: 'pears', qty: 37 },
            { name: 'bananas', qty: 16 },
            { name: 'apples', qty: 3 },
        ];
        assert.deepEqual([{ name: 'pears', qty: 37 }], findItemsOver20(item));
    });
    it('should find no quantity over 40', function () {
        var item = [
            { name: 'apples', qty: 10 },
            { name: 'pears', qty: 37 },
            { name: 'bananas', qty: 16 },
            { name: 'apples', qty: 3 },
        ];
        assert.deepEqual([], findItemsOver20([]));
    });
});