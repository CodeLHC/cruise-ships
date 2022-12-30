const Ship = require("../src/cruiseShips");

describe("constructor", () => {
  test("returns an object", () => {
    expect(new Ship("Cuba")).toBeInstanceOf(Object);
  });
  test("has a starting port", () => {
    const ship = new Ship("Cuba");
    expect(ship.startingPort).toEqual("Cuba");
  });
});
