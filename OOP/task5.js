class Building {
    constructor(numberFloor) {
        this.numberFloor = numberFloor;
    }

    getNumberFloor() {
        return this.numberFloor;
    }
}

class livingHome extends Building{
    constructor(numberFloor, numberOfFlatsPerFloor) {
        super(numberFloor);
        this.numberOfFlatsPerFloor = numberOfFlatsPerFloor;
    }

     getNumberFloor() {
        return {
            numberFloor: this.numberFloor,
            totalFlat: this.numberFloor * this.numberOfFlatsPerFloor
        }
    }
}

class Mall extends Building {
    constructor(numberFloor, numberOfStoresPerFloor) {
        super(numberFloor);
        this.numberOfStoresPerFloor = numberOfStoresPerFloor;
    }

    getNumberFloor() {
        return {
            numberFloor: this.numberFloor,
            totalStores: this.numberFloor * this.numberOfStoresPerFloor
        }
    }
}


const home13 = new livingHome(13, 8);
console.log(home13.getNumberFloor());

const dana = new Mall(3, 20);
console.log(dana.getNumberFloor());