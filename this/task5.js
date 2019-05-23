/*
Создать объект "вычислитель", у котрого есть числовое свойство 
"значение" и методы "двоить", "прибывать один", "отнять один".
Методы можно вызывать через точку, образуя цепочку методов
 */

const numerator = {
    value: 1,
    double: function () {
        this.value *= 2;
        return this;
    },
    plusOne: function () {
        ++this.value;
        return this;
    },
    minusOne: function () {
        --this.value;
        return this;
    }
};

numerator.double().plusOne().plusOne().minusOne();
console.log(numerator.value);