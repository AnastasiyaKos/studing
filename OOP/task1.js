class Cars {
    constructor (model, year) {

        this.model = model;
        this.year = year;

    }

    getModel() {
        return this.model[0].toUpperCase() + this.model.slice(1);
    }

    getYear() {
        const nowYear = new Date().getFullYear();
        return nowYear - this.year;
    }
}

let lexus = new Cars('lexus', '5');

console.log(lexus.getModel());
console.log(lexus.getYear());