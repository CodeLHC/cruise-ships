const { Ship } = require("../src/ship");
const { Itinerary } = require("./itinerary");

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

  module.exports = { Port };