/*
Создайте объект calculator с тремя методами:

read() запрашивает prompt два значения и сохраняет их как свойства объекта
sum() возвращает сумму этих двух значений
mul() возвращает произведение этих двух значений
 */


let calculator = {
    sum: function () {
        return this.a + this.b;
    },
    mul: function () {
        return this.a * this.b;
    },
    read: function () {
       this.a = +prompt('Введите значение a', 0);
       this.b = +prompt('Введите значение b', 0);
   }
};

// calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );