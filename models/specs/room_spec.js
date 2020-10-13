const assert = require('assert');
const Room = require('../room.js');

describe('Room', function() {
    let room;
    beforeEach(function() {
        room = new Room(40);
    });

    it('should have an area', function() {
        const actual = room.area;
        assert.strictEqual(actual, 40);
    });

    it('should start unpainted', function () {
        const actual = room.checkPaintedArea();
        assert.strictEqual(actual, 0);
    });

    it('should be paintable', function () {
        room.paintRoom(4);
        const actual = room.checkPaintedArea();
        assert.strictEqual(actual, 4);
    });
})