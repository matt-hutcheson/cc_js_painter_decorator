const Room = function(area) {
    this.area = area;
    this.paintedArea = 0;
};

Room.prototype.checkPaintedArea = function() {
    return this.paintedArea;
}

Room.prototype.paintRoom = function(paintVolume) {
    this.paintedArea += paintVolume;
}

module.exports = Room;