const { Vehicle } = require("../vehicle_proto");

describe("Vehicle Class (Prototype and Promises)", () => {
    test("Should initialize with given name & year", () =>{
        const vehicle = new Vehicle("Toyota", 1994);
        expect(vehicle.make).toBe("Toyota");
        expect(vehicle.year).toBe(1994);
    });

    test("startEngine() should resolve with 'Engine Started'", async () => {
        const vehicle = new Vehicle("Toyota", 1994);
        const result = await vehicle.startEngine();
        expect(result).toBe("Engine Started");
    });
});