(function exportShip() {
class Ship {
  constructor(itinerary) {
    this.previousPort = null;
    this.itinerary = itinerary;
    this.startingPort = itinerary.ports[0];
    this.setCurrentPort(itinerary.ports[0]);
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
if (typeof module !== 'undefined' && module.exports) {
  module.exports =  Ship ;
} else {
  window.Ship = Ship;
}
})();

