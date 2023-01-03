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
  test("gets added to port on instantiation", () => {
    const bermuda = new Port("Bermuda");
    const bahamas = new Port("Bahamas");
    const ports2 = [bermuda, bahamas];
    const itinerary2 = new Itinerary(ports2);
    const ship = new Ship(itinerary2);

    expect(ship.currentPort.ships).toEqual([ship]);
  });
});

describe("set sail", () => {
  test("moves from starting port", () => {
    const aruba = new Port("Aruba");
    const jamaica = new Port("Jamaica");
    const ports2 = [aruba, jamaica];
    const itinerary2 = new Itinerary(ports2);

    const titanic = new Ship(itinerary2);
    titanic.setSail();
    expect(titanic.currentPort).toEqual(null);
    expect(titanic.previousPort).toEqual(aruba);
    expect(aruba.ships).toHaveLength(0);
  });
});

describe("dock", () => {
  test("ship can dock", () => {
    const aruba = new Port("Aruba");
    const jamaica = new Port("Jamaica");
    const ports2 = [aruba, jamaica];
    const itinerary2 = new Itinerary(ports2);

    const titanic = new Ship(itinerary2);
    titanic.setSail();
    titanic.dock();
    expect(titanic.currentPort).toEqual(jamaica);
    expect(titanic.currentPort.ships[0]).toEqual(titanic);
  });
});
