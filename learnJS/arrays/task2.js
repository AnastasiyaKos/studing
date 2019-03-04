/*
Напишите код для вывода alert случайного значения из массива:
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
 */


const arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];

const min = 0;
const max = arr.length - 1;
const rand = min + Math.floor(Math.random() * (max + 1 - min));


console.log(arr[rand]);


