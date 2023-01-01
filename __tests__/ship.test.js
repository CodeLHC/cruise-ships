const { Ship, Port, Itinerary } = require("../src/cruiseShips");

const aruba = new Port("Aruba");
const jamaica = new Port("Jamaica");
const ports = [aruba, jamaica];
const itinerary = new Itinerary(ports);

describe("ship constructor", () => {
  test("returns a ship object", () => {
    expect(new Ship(itinerary)).toBeInstanceOf(Ship);
  });
  test("shows starting port and current port", () => {
    const ship = new Ship(itinerary);
    expect(ship.startingPort).toEqual(aruba);
    expect(ship.currentPort).toEqual(aruba);
  });
  test("shows previous port", () => {
    const ship = new Ship(itinerary);
    expect(ship.previousPort).toEqual(null);
  });
});

describe("set sail", () => {
  test("moves from starting port", () => {
    const ship = new Ship(itinerary);
    ship.setSail();
    expect(ship.currentPort).toEqual(null);
    expect(ship.previousPort).toEqual(aruba);
  });
});

describe("dock", () => {
  test("ship can dock", () => {
    const ship = new Ship(itinerary);
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toEqual(jamaica);
  });
});
