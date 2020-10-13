const Decorator = function() {
    this.paintStockVolume = 0
};

Decorator.prototype.addPaintToStock = function(paintcan) {
    this.paintStockVolume += paintcan.volume;
};

Decorator.prototype.canPaintFullRoom = function(room) {
    if (room.area <= this.paintStockVolume) {
        return true;
    } else {
        return false;
    };
};

module.exports = Decorator;