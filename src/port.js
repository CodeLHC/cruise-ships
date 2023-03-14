const { Ship } = require("../src/ship");
const { Itinerary } = require("./itinerary");

(function exportPort() {
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
    }
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Port };
  } else {
    window.Port = Port;
  }
}());

