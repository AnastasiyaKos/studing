// Слияние массивов
// Напишите код, объединяющий три массива цифр, и располагающий,
// с помощью метода pop(), цифры в полученном массиве в порядке убывания их значений через пробел.


let a = [1,2,3];
let b = [4,5,6];
let c = [7,8,9];
function getArr(a, b, c) {
    let newArr = a.concat(b,c);
    let result = newArr.pop();
    while ( result !== undefined) {
       console.log(result + ' ');
        result = newArr.pop();
    }
}

console.log(getArr(a, b, c));