/*
Случайный порядок в массиве
Используйте функцию sort для того, чтобы «перетрясти» элементы массива в случайном порядке.

var arr = [1, 2, 3, 4, 5];

arr.sort(ваша функция);

alert( arr ); // элементы в случайном порядке, например [3,5,1,2,4]
 */
let array = [1, 2, 3, 4, 5];

getRandomArray = (current, next) => {
    return Math.random() - 0.5;
};

array.sort(getRandomArray);

console.log(array);

