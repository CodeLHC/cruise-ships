const { Ship, Port } = require("../src/cruiseShips");

describe("ship constructor", () => {
  const cuba = new Port("Cuba");
  test("returns a ship object", () => {
    expect(new Ship(cuba)).toBeInstanceOf(Object);
  });
  test("shows starting port and current port", () => {
    const ship = new Ship(cuba);
    expect(ship.startingPort).toEqual(cuba);
    expect(ship.currentPort).toEqual(cuba);
  });
});

describe("set sail", () => {
  const cuba = new Port("Cuba");
  test("moves from starting port", () => {
    const ship = new Ship(cuba);
    ship.setSail();
    expect(ship.currentPort).toEqual(null);
  });
});

describe("dock", () => {
  test("ship can dock", () => {
    const cuba = new Port("Cuba");
    const jamaica = new Port("Jamaica");
    const ship = new Ship(cuba);
    console.log(ship);
    ship.setSail();
    ship.dock(jamaica);
    expect(ship.currentPort).toEqual(jamaica);
  });
});
