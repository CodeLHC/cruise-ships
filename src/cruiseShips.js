// object - SHIP

//method -

// properties - STARTING PORT

class Ship {
  constructor(port) {
    this.startingPort = port;
    this.setCurrentPort(port);
  }

  // shouldn't be visible from outside of the class
  setCurrentPort(port) {
    this.currentPort = port;
  }

  setSail() {
    this.setCurrentPort(null);
  }

  dock(port) {
    this.setCurrentPort(port);
  }
}

class Port {
  constructor(name) {
    this.name = name;
  }
}

module.exports = { Ship, Port };
