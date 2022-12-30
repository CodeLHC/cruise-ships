const Ship = require("../src/cruiseShips");

describe("constructor", () => {
  test("returns an object", () => {
    expect(new Ship("Cuba")).toBeInstanceOf(Object);
  });
  test("shows starting port and current port", () => {
    const ship = new Ship("Cuba");
    expect(ship.startingPort).toEqual("Cuba");
    expect(ship.currentPort).toEqual("Cuba");
  });
});

describe("set sail", () => {
  test("moves from starting port", () => {
    const ship = new Ship("Cuba");
    ship.setSail();
    expect(ship.currentPort).toEqual("");
  });
});
