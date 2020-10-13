const assert = require('assert');
const Room = require('../room.js');

describe('Room', function() {
    it('should have an area', function() {
        room = new Room(40);
        const actual = room.area;
        assert.strictEqual(actual, 40);
    })
})