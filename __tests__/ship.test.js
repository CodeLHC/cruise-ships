const { Ship, Port, Itinerary } = require("../src/cruiseShips");

let aruba;
let jamaica;
let ports;
let itinerary;
let ship;

beforeEach(() => {
  aruba = new Port("Aruba");
  jamaica = new Port("Jamaica");
  ports = [aruba, jamaica];
  itinerary = new Itinerary(ports);
  ship = new Ship(itinerary);
});
describe("ship constructor", () => {
  test("returns a ship object", () => {
    expect(new Ship(itinerary)).toBeInstanceOf(Ship);
  });
  test("shows starting port and current port", () => {
    // const ship = new Ship(itinerary);
    expect(ship.startingPort).toEqual(aruba);
    expect(ship.currentPort).toEqual(aruba);
  });
  test("shows previous port", () => {
    // const ship = new Ship(itinerary);
    expect(ship.previousPort).toEqual(null);
  });
  test("gets added to port on instantiation", () => {
    // const bermuda = new Port("Bermuda");
    // const bahamas = new Port("Bahamas");
    // const ports2 = [bermuda, bahamas];
    // const itinerary2 = new Itinerary(ports2);
    // const ship = new Ship(itinerary2);

    expect(ship.currentPort.ships).toEqual([ship]);
  });
});

describe("set sail", () => {
  test("moves from starting port", () => {
    // const aruba = new Port("Aruba");
    // const jamaica = new Port("Jamaica");
    // const ports2 = [aruba, jamaica];
    // const itinerary2 = new Itinerary(ports2);

    // const titanic = new Ship(itinerary2);
    // titanic.setSail();
    ship.setSail();
    expect(ship.currentPort).toEqual(null);
    expect(ship.previousPort).toEqual(aruba);
    expect(aruba.ships).toHaveLength(0);
  });
});

describe("dock", () => {
  test("ship can dock", () => {
    // const aruba = new Port("Aruba");
    // const jamaica = new Port("Jamaica");
    // const ports2 = [aruba, jamaica];
    // const itinerary2 = new Itinerary(ports2);

    // const titanic = new Ship(itinerary2);
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toEqual(jamaica);
    expect(ship.currentPort.ships[0]).toEqual(ship);
  });
});
