/*
Отсортировать массив в обратном порядке [2, 4, 7, 1, -2, 10, -9]
с помощью функции.
 */

exports.compare = (previous, next) => {
    if (previous < next) return 1;
    if (previous > next) return -1;
};

//console.log([1, 1, -1, 4, 9, 5, 10].sort(compare))