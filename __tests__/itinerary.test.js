const { Ship, Port, Itinerary } = require("../src/cruiseShips");

describe("itinerary", () => {
  test("returns a itinerary object", () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });
  test("shows ports", () => {
    const aruba = jest.fn();
    const jamaica = jest.fn();
    const ports = [aruba, jamaica];
    const itinerary = new Itinerary(ports);
    expect(itinerary.ports).toEqual(ports);
  });
});
