const Room = function(area) {
    this.area = area;
    this.paintedArea = 0;
};

Room.prototype.checkPaintedArea = function() {
    return this.paintedArea;
};

Room.prototype.paintRoom = function(paintcan) {
    if (paintcan.volume > (this.area - this.paintedArea)) {
        const remainingPaint = paintcan.volume - (this.area - this.paintedArea);
        this.paintedArea = this.area;
        paintcan.volume = remainingPaint;
        return paintcan;
    } else if (paintcan.volume !== 0) {
        this.paintedArea += paintcan.volume;
        paintcan.empty()
        return paintcan;
    };
};

module.exports = Room;