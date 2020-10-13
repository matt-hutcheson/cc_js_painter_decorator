const assert = require('assert');
const Decorator = require('../decorator.js');

describe('Decorator', function() {
    let decorator;
    beforeEach(function() {
        decorator = new Decorator();
    })

    it('should start with no paint', function() {
        const actual = decorator.paintStockVolume;
        assert.strictEqual(actual, 0);
    })

    it('should be able to increase paint stock', function() {
        decorator.addPaintToStock(4);
        const actual = decorator.paintStockVolume;
        assert.strictEqual(actual, 4);
    });

    it(' should be able to check if it can paint a full room', function() {
        decorator.addPaintToStock(80);
        const actual = decorator.canPaintRoom();
        assert.strictEqual(actual, true);
    })
})