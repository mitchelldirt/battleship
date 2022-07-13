function createShip(length: number, coords: Array<number | string>): battleship {
    let ship: battleship = {
        length: length,
        coords: coords,
        hit: (position: number) => {
            console.log(this)
            if (coords.indexOf(position) !== -1) {
                let hitPosition = coords.indexOf(position);
                coords[hitPosition] = "X";
            }
        },
        isSunk: () => {
            for (let coord of coords) {
                if (coord != "X") {
                    return false;
                }
            }
            return true;
        }
    }
    return ship;
};

interface battleship {
    length: number,
    coords: Array<number | string>,
    hit: (position: number) => void,
    isSunk: () => boolean
}

module.exports.createShip = createShip;

const testShip = createShip(3, [1, 2, 3]);
testShip.hit(1)

