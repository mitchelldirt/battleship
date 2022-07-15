const myShipFunctions = require('./ships.ts')

describe("Testing to see if creating a ship outputs correctly and incorrectly", () => {
    test('Creating a ship works', () => {
        let testShip = {
            "length": 3,
            "coords": [10, 11, 12],
            "hit": expect.any(Function)
        }
        expect(myShipFunctions.createShip(3, [10, 11, 12])).toMatchObject(testShip);
    });

    test('coords array.length matches that of the length property', () => {
        const ship = myShipFunctions.createShip(5, [1, 2, 3, 4, 5]);
        expect(ship.length).toBe(ship.coords.length);
    })
});

describe("Testing the ship methods", () => {
    test('Hit method changes the value of the hit coordinate', () => {
        const ship = myShipFunctions.createShip(3, [1, 2, 3]);
        ship.hit(1)
        expect(ship.coords).toEqual(["X", 2, 3]);
    });

    test('Hit method changes the value of the hit coordinate #2', () => {
        const ship = myShipFunctions.createShip(3, [1, 2, 3]);
        ship.hit(3)
        expect(ship.coords).toEqual([1, 2, "X"]);
    });

    test('isSunk recognizes that the ship is sunk', () => {
        const sunkShip = myShipFunctions.createShip(3, ["X", "X", "X"]);
        sunkShip.isSunk();
        expect(sunkShip.sunk).toBeTruthy()
    });

    test('Ship is NOT sunk', () => {
        const unsunkShip = myShipFunctions.createShip(3, ["X", "X", 3]);
        unsunkShip.isSunk();
        expect(unsunkShip.sunk).toBeFalsy()
    })
})