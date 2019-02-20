/*
Удвоить все элементы массива, не используя циклы
['one', 2, 'three', 4]
 */

exports.doubleArr = (array) => {
    return array.concat(array)
};