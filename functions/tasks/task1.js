// task1 description
/* Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение:
multiply(1, 2, 3) = 6
Еслли нет ни одного аргумента, вернуть ноль: multiply() = 0
*/

function multiply() {
    if ( arguments.length === 0) {
       return 0;
    }
    let result = 1,
        max = arguments.length;
    for (let i = 0; i < max; i++) {
        result *= arguments[i];
    }
    return result;

}

console.log (multiply(55, 0, 1, 25))

