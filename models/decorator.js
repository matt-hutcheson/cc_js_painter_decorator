const Decorator = function() {
    this.paintStockVolume = 0
};

Decorator.prototype.addPaintToStock = function(paintVolume) {
    this.paintStockVolume += paintVolume;
};

Decorator.prototype.canPaintFullRoom = function(room) {
    if (room.area > this.paintStockVolume) {
        return false;
    } else {
        return true;
    };
};

module.exports = Decorator;