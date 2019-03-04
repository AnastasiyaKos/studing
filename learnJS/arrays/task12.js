/*
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
*/

let arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

aclean = (arr) => {
    for ( let i = 0; i < arr.length; i++ ) {
        let newArr = arr[i].split('');
        console.log(newArr)
    }
};