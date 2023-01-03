const { Ship, Port, Itinerary } = require("../src/cruiseShips");

describe("port constructor", () => {
  test("returns a port object", () => {
    expect(new Port("aruba")).toBeInstanceOf(Object);
  });
  test("shows port name", () => {
    const port = new Port("Aruba");
    expect(port.name).toEqual("Aruba");
  });
});

describe("addShip", () => {
  const aruba = new Port("aruba");
  const jamaica = new Port("Jamaica");
  const ports = [aruba, jamaica];
  const itinerary = new Itinerary(ports);
  const titanic = new Ship(itinerary);
  const ships = [titanic];
  test("adds ship to ships array when at port", () => {
    aruba.addShip(titanic);
    expect(aruba.ships[0]).toEqual(titanic);
  });
});

describe("removeShip", () => {
  const aruba = new Port("aruba");
  const jamaica = new Port("Jamaica");
  const ports = [aruba, jamaica];
  const itinerary = new Itinerary(ports);
  const titanic = new Ship(itinerary);
  const ngl = new Ship(itinerary);
  test("removes ship from ships array when ship uses set sail method", () => {
    aruba.addShip(titanic);
    aruba.addShip(ngl);
    aruba.removeShip(titanic);
    expect(aruba.ships[0]).toEqual(ngl);
  });
});
