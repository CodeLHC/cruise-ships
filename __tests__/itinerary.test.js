const { Ship, Port, Itinerary } = require("../src/cruiseShips");

describe("itinerary", () => {
  test("returns a itinerary object", () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });
  test("shows ports", () => {
    const aruba = new Port("Aruba");
    const jamaica = new Port("Jamaica");
    const ports = [aruba, jamaica];
    const itinerary = new Itinerary(ports);
    expect(itinerary.ports).toEqual(ports);
  });
});
