const Paintcan = function(volume) {
    this.volume = volume
}

Paintcan.prototype.empty = function() {
    this.volume = 0
}

module.exports = Paintcan