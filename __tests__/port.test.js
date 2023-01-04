const { Ship, Port, Itinerary } = require("../src/cruiseShips");

let aruba;
let jamaica;
let ports;
let itinerary;
let ship;
let HMSngl;

beforeEach(() => {
  aruba = new Port("Aruba");
  jamaica = new Port("Jamaica");
  ports = [aruba, jamaica];
  itinerary = new Itinerary(ports);
  ship = new Ship(itinerary);
  HMSngl = new Ship(itinerary);
});

describe("port constructor", () => {
  test("returns a port object", () => {
    expect(new Port("aruba")).toBeInstanceOf(Object);
  });
  test("shows port name", () => {
    expect(aruba.name).toEqual("Aruba");
  });
});

describe("addShip", () => {
  test("adds ship to ships array when at port", () => {
    aruba.addShip(ship);
    expect(aruba.ships[0]).toEqual(ship);
  });
});

describe("removeShip", () => {
  test("removes ship from ships array when ship uses set sail method", () => {
    aruba.addShip(ship);
    aruba.addShip(HMSngl);
    aruba.removeShip(ship);
    expect(aruba.ships[0]).toEqual(HMSngl);
  });
});
