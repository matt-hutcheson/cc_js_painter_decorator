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
    if (this.checkTotalPaintStock() >= room.area) {
        return true;
    } else {
        return false;
    };
};

Decorator.prototype.paintRoom = function(room) {
    if (this.canPaintFullRoom(room) === true) {
        for (let paintcan of this.paintStock) {
            if (room.checkPaintedArea() < room.area) {
                paintcan = room.paintRoom(paintcan);
            };
        };
    };
};

Decorator.prototype.removeEmptys = function() {
    const filteredArray = [];
    for (can of this.paintStock) {
        if (can.volume !== 0) {
            filteredArray.push(can);
        };
    };
    return filteredArray;
}

module.exports = Decorator;