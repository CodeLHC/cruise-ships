// object - SHIP

//method -

// properties - STARTING PORT

function Ship(portName) {
  this.startingPort = portName;
  this.currentPort = portName;
}

Ship.prototype.setSail = function () {
  this.currentPort = "";
};

module.exports = Ship;
