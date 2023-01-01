class Ship {
  constructor(itinerary) {
    this.previousPort = null;
    this.startingPort = itinerary.ports[0];
    this.setCurrentPort(itinerary.ports[0]);
    this.itinerary = itinerary;
  }

  // shouldn't be visible from outside of the class
  setCurrentPort(port) {
    this.currentPort = port;
  }

  setPreviousPort(port) {
    this.previousPort = port;
  }

  setSail() {
    this.setPreviousPort(this.currentPort);
    this.setCurrentPort(null);
  }

  getPortIndex(port) {
    return this.itinerary.ports.findIndex(({ name }) => {
      return port.name === name;
    });
  }

  dock() {
    const previousPortIndex = this.getPortIndex(this.previousPort);
    const port = this.itinerary.ports[previousPortIndex + 1];
    this.setCurrentPort(port);
  }
}

class Port {
  constructor(name) {
    this.name = name;
  }
}

class Itinerary {
  constructor(ports) {
    this.ports = ports;
  }
}

module.exports = { Ship, Port, Itinerary };
