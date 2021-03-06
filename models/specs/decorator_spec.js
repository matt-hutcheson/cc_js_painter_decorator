const assert = require('assert');
const Decorator = require('../decorator.js');
const Room = require('../room.js');
const Paintcan = require('../paintcan.js')

describe('Decorator', function() {
    let decorator;
    let paintcan;
    let paintcan2;
    beforeEach(function() {
        decorator = new Decorator();
        paintcan = new Paintcan(40);
        paintcan2 = new Paintcan(45);
    })

    it('should start with no paint', function() {
        const actual = decorator.paintStock.length;
        assert.strictEqual(actual, 0);
    })

    it('should be able to increase paint stock', function() {
        decorator.addPaintToStock(paintcan);
        decorator.addPaintToStock(paintcan);
        const actual = decorator.paintStock.length;
        assert.strictEqual(actual, 2);
    });

    it(' should be able to check if it can paint a full room', function() {
        const room = new Room(80);
        decorator.addPaintToStock(paintcan);
        decorator.addPaintToStock(paintcan)
        const actual = decorator.canPaintFullRoom(room);
        assert.strictEqual(actual, true);
    });

    it ('should be able to paint room', function() {
        const room = new Room(60);
        decorator.addPaintToStock(paintcan);
        decorator.addPaintToStock(paintcan2);
        decorator.paintRoom(room);
        assert.strictEqual(room.paintedArea, 60)
        assert.strictEqual(decorator.checkTotalPaintStock(), 25)
        assert.strictEqual(decorator.paintStock[0].volume, 0)
        assert.strictEqual(decorator.paintStock[1].volume, 25)
    })

    it('should be able to clear out empty paintcans from stock', function() {
        const paintcan3 = new Paintcan(0);
        const paintcan4 = new Paintcan(10);
        decorator.addPaintToStock(paintcan);
        decorator.addPaintToStock(paintcan2);
        decorator.addPaintToStock(paintcan3);
        decorator.addPaintToStock(paintcan4);
        decorator.paintStock = decorator.removeEmptys();
        console.log("filtered stock", decorator)
        assert.strictEqual(decorator.paintStock[2].volume, 10);        
    })
})