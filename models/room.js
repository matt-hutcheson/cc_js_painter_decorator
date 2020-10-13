const Room = function(area) {
    this.area = area;
    this.paintedArea = 0;
};

Room.prototype.checkPaintedArea = function() {
    return this.paintedArea;
}

module.exports = Room;