const assert = require('assert');
const Paintcan = require('../paintcan.js');

describe('Paintcan', function() {
    let paintcan;
    beforeEach(function () {
        paintcan = new Paintcan(4);
    });

    it('should have a volume', function () {
        const actual = paintcan.volume;
        assert.strictEqual(actual, 4);
    });

    it('can be emptied', function () {
        paintcan.empty();
        const actual = paintcan.volume;
        assert.strictEqual(actual, 0);
    });

    it('check is empty', function() {
        const actual = paintcan.checkIsEmpty();
        assert.strictEqual(actual, false)
    });
});
