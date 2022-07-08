let shipActions = {
    hit(position: number, isSunkCallBack: Function) {
    for (let coord of this.coords) {
        if (position === coord) {
            // 0 means it's been hit
            coord = 0;
        }
    }     
    isSunkCallBack(this.coords)      
    },
    isSunk(coords: number[]) {
    for (let coord of coords) {
        if (coord != 0) {
            return;
        }
        return true
    }
    }
}

function createShip(length: number, coords?: number[]) {
    let ship = Object.create(shipActions);
    ship.length = length;
    ship.coords = coords;
    return ship;
};

module.exports.createShip = createShip;