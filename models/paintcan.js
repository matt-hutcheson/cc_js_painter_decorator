const Paintcan = function(volume) {
    this.volume = volume;
};

Paintcan.prototype.empty = function() {
    this.volume = 0;
};
Paintcan.prototype.checkIsEmpty = function () {
    if (this.volume === 0) {
        return true;
    } else {
        return false;
    };
};

module.exports = Paintcan