const myShipFunctions = require('./ships.ts')

describe("Testing to see if creating a ship outputs correctly and incorrectly", () => {
    test('Creating a ship works', () => {
        expect(myShipFunctions.createShip(3, [10, 11, 12])).toEqual({
            "length": 3,
            "coords": [10, 11, 12]
        });
    });

    test('coords array.length matches that of the length property', () => {
        const ship = myShipFunctions.createShip(5, [1, 2, 3, 4, 5]);
        expect(ship.length).toBe(ship.coords.length);
    })
});