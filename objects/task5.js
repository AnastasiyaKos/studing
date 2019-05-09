/*
Напишите функцию-конструктор Calculator, которая создает объект с тремя методами:

Метод read() запрашивает два значения при помощи prompt и запоминает их в свойствах объекта.
Метод sum() возвращает сумму запомненных свойств.
Метод mul() возвращает произведение запомненных свойств.
Пример использования:
 */

function Calculator() {
    this.sum = function () {
       return this.a + this.b;
    };
    this.mul = function () {
       return this.a * this.b;
    };
    this.read = function () {
        this.a = +prompt('Введите значение a', 0);
        this.b = +prompt('Введите значение b', 0);
    }
}

const calculator = new Calculator();
calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );