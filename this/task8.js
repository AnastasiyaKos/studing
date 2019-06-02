/*
Дан массив объектов. Используя ссылку на массив numbers и Math.min,
найти минимальный элемент массива
 */

let numbers = [4, 12, 0, 10, -2, 4];

console.log(Math.min.apply(null, numbers));