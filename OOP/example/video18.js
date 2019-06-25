class Person {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello ${this.firstName} ${this.lastName}`
    }

    static sumNumbers(x, y) {
        return x + y;
    }
}

class Customer extends Person {
    constructor(firsName, lastName, phone) {
        super(firsName, lastName);

        this.phone = phone;
    }

    greeting() {
        // const parentGreeting = super.greeting();
        // return `${parentGreeting} welcome to out company`;
        return `${super.greeting()} welcome to out company`;
    }
}

const nastya = new Person('Nastya', 'Kosukha');
console.log(nastya);

const customer1 = new Customer('Nikita', 'Senko', '29-544-69-40');
console.log(customer1);