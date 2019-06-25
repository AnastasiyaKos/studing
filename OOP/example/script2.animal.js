class Animal {
    constructor (name) {
        this.name = name;
        this.sound = '';
    };

    voice () {
        console.log(this.sound)
    }
}

class Dog extends Animal {
    constructor (name) {
        super(name);
        this.sound = 'Гав';
    }
}

const dog = new Dog('Бобик');

dog.voice()