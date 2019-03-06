/*
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
*/

let arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

aclean = (arr) => {
    let newArr = [];
    for ( let i = 0; i < arr.length; i++ ) {
        newArr.push(arr[i].toLowerCase().split(''));

    }

    newArr.forEach(elem => {
        elem.sort((prev, next) => {
            if (prev > next) return 1;
            if (prev < next) return -1;
        });
    });
    console.log(newArr);

    for ( let n = 0; n < newArr[n].length-1; n++ ) {
        let res = newArr[1].join('');
        console.log(res)
    }
};
aclean(["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"])
