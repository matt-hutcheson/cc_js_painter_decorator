const Decorator = function() {
    this.paintStockVolume = 0
};

Decorator.prototype.addPaintToStock = function(paintVolume) {
    this.paintStockVolume += paintVolume;
}

module.exports = Decorator;