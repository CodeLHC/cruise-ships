const { Ship, Port, Itinerary } = require("../src/cruiseShips");

let aruba;
let jamaica;
let ports;
let itinerary;
let ship;

beforeEach(() => {
  aruba = {
    addShip: jest.fn(),
    removeShip: jest.fn(),
    name: "Aruba",
    ships: [],
  };
  jamaica = {
    addShip: jest.fn(),
    removeShip: jest.fn(),
    name: "Jamaica",
    ships: [],
  };
  ports = [aruba, jamaica];
  itinerary = {
    ports: [aruba, jamaica],
  };
  ship = new Ship(itinerary);
});
describe("ship constructor", () => {
  test("returns a ship object", () => {
    expect(new Ship(itinerary)).toBeInstanceOf(Ship);
  });
  test("shows starting port and current port", () => {
    expect(ship.startingPort).toEqual(aruba);
    expect(ship.currentPort).toEqual(aruba);
  });
  test("shows previous port", () => {
    expect(ship.previousPort).toEqual(null);
  });
  test("gets added to port on instantiation", () => {
    expect(aruba.addShip).toHaveBeenCalledWith(ship);
  });
});

describe("set sail", () => {
  test("moves from starting port", () => {
    ship.setSail();
    expect(ship.currentPort).toEqual(null);
    expect(ship.previousPort).toEqual(aruba);
    expect(aruba.ships).toHaveLength(0);
  });
});

describe("dock", () => {
  test("ship can dock", () => {
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toEqual(jamaica);
    expect(jamaica.addShip).toHaveBeenCalledWith(ship);
  });
});
