const Room = function(area) {
    this.area = area;
    this.paintedArea = 0;
};

Room.prototype.checkPaintedArea = function() {
    return this.paintedArea;
};

Room.prototype.paintRoom = function(paintcan) {
    console.log("paintroom start area", this.area)
    console.log("paintroom start paintedarea", this.paintedArea)
    console.log("paintcan start", paintcan.volume)
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
    console.log("paintroom end area", this.area)
    console.log("paintroom end paintedarea", this.paintedArea)
};

module.exports = Room;