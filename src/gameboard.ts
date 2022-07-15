interface gameBoard {
    coords: Array<number | string>,
    ships: Array<battleship>,
    isAllSunk: () => void,
    receiveAttack: (position: string) => void,
    createShip: (length: number, coords: Array<number | string>) => battleship
}