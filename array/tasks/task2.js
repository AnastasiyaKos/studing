/*
Создать функцию. которая принимает массив, а возвращает
новый с дублированными элементами входного массива:
doubleArray([1, 2, 3]) = [1,2,3,1,2,3]
 */

exports.doubleArray = function doubleArr(arr) {
    return [...arr, ...arr];
};

