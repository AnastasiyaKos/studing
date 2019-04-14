/*
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
*/

let arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

aclean = (arr) => {
    let obj = {};
    for ( let i = 0; i < arr.length; i++ ) {
         let newArr = arr[i].toLowerCase().split('').sort().join('');

        obj[newArr] = arr[i]; // сохраняет только одно значение с таким ключом
    }
    // console.log(newArr)
    // newArr.forEach(elem => {
    //     elem.sort((prev, next) => {
    //         if (prev > next) return 1;
    //         if (prev < next) return -1;
    //     });
    // });
    // console.log(newArr);
    //
    // for ( let n = 0; n < newArr[n].length-1; n++ ) {
    //     let res = newArr[1].join('');
    //     console.log(res)
    // }

    let result = [];

    for ( let key in obj )  result.push(obj[key]);

    return result;
};
console.log(aclean(["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"]));
