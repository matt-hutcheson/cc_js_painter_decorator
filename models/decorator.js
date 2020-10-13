const Decorator = function() {
    this.paintStock = []
};

Decorator.prototype.addPaintToStock = function(paintcan) {
    this.paintStock.push(paintcan);
};

Decorator.prototype.checkTotalPaintStock = function() {
    let totalStockVolume = 0;
    for (const paintcan of this.paintStock) {
        totalStockVolume += paintcan.volume;
    }
    return totalStockVolume;
};

Decorator.prototype.canPaintFullRoom = function(room) {
    if (room.area <= this.checkTotalPaintStock()) {
        return true;
    } else {
        return false;
    };
};

module.exports = Decorator;