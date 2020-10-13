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
})