const { Ship } = require("../src/ship");
const { Port } = require("./port");

class Itinerary {
    constructor(ports) {
      this.ports = ports;
    }
  }

  module.exports = { Itinerary };