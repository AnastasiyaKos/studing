/*
Создайте модуль "калькулятор", который умеет складывать, умножать,
вычитать, делить и возводить в степень. Конечное значение округлить
до двух знаков после точки (значение хранится в обычной переменной,
а не в this)

модуль.установитьЗначение(10);
модуль.прибывить(5); // 15
модуль.умножить(2); // 30
модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

можно вызывать методы цепочкой:
модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); //100
 */

const calculator = (function () {
    let result;
    
    function setValue(value) {
        result = value;
    }
    
    function plus(value) {
        result += value;
        return result;
    }
    
    function minus(value) {
        result -= value;
        return result;
    }
    
    function multiply(value) {
        result *= value;
        return result;
    }
    
    function getValue() {
        result.toFixed(2);
        return result;
    }

    function power(value) {
        result.Math.pow(value);
        return result;
    }

    return {
        setValue,
        plus,
        minus,
        multiply,
        getValue,
        power
    }
}());

calculator.setValue(10);
console.log(calculator.plus(5));
console.log(calculator.multiply(2));
console.log(calculator.getValue());

//console.log(calculator.setValue(10).power(2).getValue())