const { Ship, Port } = require("../src/cruiseShips");

describe("port constructor", () => {
  test("returns a port object", () => {
    expect(new Port("Cuba")).toBeInstanceOf(Object);
  });
  test("shows port name", () => {
    const port = new Port("Cuba");
    expect(port.name).toEqual("Cuba");
  });
});
