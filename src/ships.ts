let shipActions = {
    hit() {
        
    },
    isSunk() {

    }
}

function createShip(length: number, coords?: number[], hits?: number[]) {
    let ship = Object.create(shipActions);
    ship.length = length;
    ship.coords = coords;
    ship.hit = hits;
    return ship;
};