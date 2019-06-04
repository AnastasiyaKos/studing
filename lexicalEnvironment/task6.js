/*
Реализовать функцию, которая умножает и умеет запоминать 
возвращаемый результат между вызовами:
 */

function MultiMaker(number1) {
    let result = 1 * number1;
    
    return function (number2) {
        result = result * number2;
        return result;
    }
}

const multiply = MultiMaker(2);

console.log(multiply(2));
console.log(multiply(1));
console.log(multiply(3));
console.log(multiply(10));