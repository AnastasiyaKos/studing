/*
Создайте функцию filterRange(arr, a, b), которая принимает массив чисел arr и
возвращает новый массив, который содержит только числа из arr из диапазона от a до b.
То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция не должна менять arr.

Пример работы:

var arr = [5, 4, 3, 8, 0];

var filtered = filterRange(arr, 3, 5);
// теперь filtered = [5, 4, 3]
// arr не изменился
 */

const arr = [5, 4, 3, 8, 0];

filterRange = (arr, from, to) => {
    let newArr = [];
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] >= from && arr[i] <= to) {
            newArr = [...newArr, arr[i]];
        }
    } return newArr;

};

let filter = filterRange(arr, 3, 5);
console.log(filter);

