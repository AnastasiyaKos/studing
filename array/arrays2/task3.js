//Пользователь вводит многозначное число через promt.
// Напишите функцию colonOdd(num), которая принимает число
// num в качестве аргумента и вставляет двоеточие (:) между двумя.

const num = prompt('Введите число', 554712);

colonOdd = (num) => {
    let newNum = num.split('');
    let result = [newNum[0]];
    let newNumLength = newNum.length;
    for ( let i = 1; i < newNumLength; i++ ) {
        if ( (newNum[i-1] % 2 !== 0) && (newNum[i] % 2 !== 0)) {
            result.push(':', newNum[i]);
        } else {
            result.push(newNum[i]);
        }
    }
    return result.join('');

};

alert(colonOdd(num));