// 1. Создается пустой объект
// 2. Этот объект устанавливается в качестве this для этой функции
// 3. Функция запускается
// 4. Функция возвращает this (даже если нет return)

function Persone(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    // this.getFullName = function () {
    //     return `${this.firstName} ${this.lastName}`;
    // }
}

Persone.prototype.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
};

Persone.prototype.greeting = function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
};

let nastya = new Persone('Nastya', 'Kosukha', 20);

function Customer(firstName, lastName, age, phone, membership) {
    Persone.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

// Inherit the Persone prototype(наследуем прототип объекта)
Customer.prototype = Object.create(Persone.prototype);
Customer.prototype.constructor = Customer;

Customer.prototype.greeting = function () {
    return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
};

Customer.prototype.getMembership = function () {
    return this.membership;
};

let customer1 = new Customer('Nikita', 'Senko', '29-544-69-40', 'Standart');

console.log(customer1);
// проверить создан ли экземпляр(является ли наследником) настя(проверка в браузере)
//nastya instanceof Persone;