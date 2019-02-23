/*
Создать функцию, которая принимает число N и возвращает
массив заполненный числами от 1 до N; getArray(10);
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 */

exports.getArr = function getArr(count) {
    const array = [];

    for (let i = 1; i <= count; i++) {
        array.push(i)
    }
    return array;
};
