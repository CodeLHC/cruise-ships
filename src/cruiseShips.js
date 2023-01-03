class Ship {
  constructor(itinerary) {
    this.previousPort = null;
    this.startingPort = itinerary.ports[0];
    this.setCurrentPort(itinerary.ports[0]);
    this.itinerary = itinerary;
    this.currentPort.addShip(this);
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
    this.previousPort.removeShip(this);
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
    this.currentPort.addShip(this);
  }
}

class Port {
  constructor(name) {
    this.name = name;
    this.ships = [];
  }
  addShip(ship) {
    this.ships.push(ship);
  }
  removeShip(shipToRemove) {
    function findShip(ship) {
      return ship === shipToRemove;
    }
    const findShipsIndex = this.ships.findIndex(findShip);
    const updatedShipArray = this.ships.splice(findShipsIndex, 1);
    console.log({ findShipsIndex, updatedShipArray });
  }
}

class Itinerary {
  constructor(ports) {
    this.ports = ports;
  }
}

module.exports = { Ship, Port, Itinerary };
