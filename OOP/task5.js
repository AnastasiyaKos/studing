function Building(name, numberFloor) {
    this.name = name;

    this.setNumberFloor = function (amount) {
        numberFloor = amount;
    };

    this.getNumberFloor = function () {
        return numberFloor;
    }
}

function LivingHome(numberFloor, numberOfFlatsPerFloor) {
    Building.apply(this, arguments);
    this.numberOfFlatsPerFloor = numberOfFlatsPerFloor;
    this.numberFloor = numberFloor;

    this.getNumberFloor = function () {
        return {
            numberFloor: this.numberFloor,
            totalFlat: this.numberFloor * this.numberOfFlatsPerFloor
        }
    }
}

function Mall(numberFloor, numberOfStoresPerFloor) {
    Building.apply(this, arguments);
    this.numberFloor = numberFloor;
    this.numberOfStoresPerFloor = numberOfStoresPerFloor;

    this.getNumberFloor = function () {
        return {
            numberFloor: this.numberFloor,
            totalStores: this.numberFloor * this.numberOfStoresPerFloor
        }
    }
}


const home13 = new LivingHome(5, 2);
console.log(home13.getNumberFloor());

const dana = new Mall(3, 20);
console.log(dana.getNumberFloor());