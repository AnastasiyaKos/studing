// const person1 = {
//     name: 'Анастасия',
//     family: 'Косуха',
//     age: 19,
//
//     sayHello() {
//         console.log(`Привет, меня зовут ${this.name} ${this.family}. Мне ${this.age}.`)
//     }
// };
// const person2 = {
//     name: 'Никита',
//     family: 'Сенько',
//     age: 21,
//
//     sayHello() {
//         console.log(`Привет, меня зовут ${this.name} ${this.family}. Мне ${this.age}.`)
//     }
// };
// person1.sayHello();
// person2.sayHello();

/*function getPerson(name, family, age) {
    const person = {
        name: name,
        family: family,
        age: age,

        sayHello() {
            console.log(`Привет, меня зовут ${this.name} ${this.family}. Мне ${this.age}.`)
        }
    };

    return person
}

const person1 = getPerson('Анастасия', 'Косуха', 19);
const person2 = getPerson('Никита', 'Сенько', 21);

person1.sayHello();
person2.sayHello();*/

// function Person(name, family, age) {
//     this.name = name;
//     this.family = family;
//     this.age = age;
//
//     // this.sayHello = () => {
//     //     console.log(`Привет, меня зовут ${this.name} ${this.family}. Мне ${this.age}.`)
//     // }
// }
//
// Person.prototype.car = 'Lada Prior';
// Person.prototype.sayHello = function sayHello() {
//     console.log(`Привет, меня зовут ${this.name} ${this.family}. Мне ${this.age}.`)
// };
//
// const person = new Person('Анастасия', 'Косуха', 19);
// person.sayHello();

class Person {
    constructor (name, family, age) {
        this.name = name;
        this.family = family;
        this.age = age;
    };

    sayHello() {
        //console.log(`Привет, меня зовут ${this.name} ${this.family}. Мне ${this.age}.`);
    };

    get fullName () {
        return `${this.name} ${this.family}`
    }

    set fullName (val) {
        const match = val.split(' ');

        this.name = match[0];
        this.family = match[1];

        return val;
    }
}

const person1 = new Person('Анастасия', 'Косуха', 19);

//person1.sayHello();
//console.log(person1.fullName);

