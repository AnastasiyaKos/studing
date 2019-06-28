class Furniture {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getInfo() {
        return this.name[0].toUpperCase() + this.name.slice(1) + ' стоит ' + this.price + '$';
    }
}

class HomeFurniture extends Furniture {
    constructor(name, price, availability) {
        super(name, price);
        this.availability = availability;
    }

    getInfo() {
        if (this.availability) {
            return super.getInfo() + '. Есть в наличии.';
        } else {
            return super.getInfo() + '. Нет в наличии.';
        }
    }
}

const chair = new HomeFurniture('стул', 15, false);
console.log(chair.getInfo());