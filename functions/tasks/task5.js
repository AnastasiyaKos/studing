/* создать 2 функции и дать им осмысленные названия:
-первая функция принимает массив и колбэк
-вторая функция(КОЛБЭК) орабатывает каждый элемент массива
Первая функция возвращает строку "New value:" и обрабатывает массив:

1. firstFunc(['my', 'name', 'is', 'Trinity'], secondFunk) - "New value: MyNamesIsTrinity"
2. firstFunc([10, 20, 30], secondFunc) - "New value: 100, 200, 300"
3. firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aron}], secondFunc) -
   "New value: Jhon is 45, Aron is 20"
5. firstFunc(['abc', '123'], secondFunc) - "New value: cba, 321"
6. firstFunc([1, 2, 3], function(namber) {return number + 5 + ''}) - New value: 6, 7, 8
 */

exports.handleArray = function handleArray(arr, handler) {
    return `New value: ${handler(arr)}`
};

// const result = handleArray(['my', 'name'], (arr)=>{
//     let result = '';
//
//     arr.forEach(elem => {
//         result += elem[0].toUpperCase() + elem.slice(1);
//     });
//     return result;
// });



// const resultTwo = handleArray([10, 20, 30], (arr)=>{
//     let resultTwo = '';
//
//     arr.forEach( (elem, index, arr) => {
//         if (index === arr.length - 1) {
//             resultTwo += elem * 10 + ' ';
//         } else {
//             resultTwo += elem * 10 + ', ';
//         }
//
//     });
//     return resultTwo;
// });


// const resThree = handleArray ([{
//     age: 45,
//     name: 'Jhon'}, {
//     age: 20,
//     name: 'Aron'
// }], (arr) => {
//
//     let resThree = '';
//
//     arr.forEach( (item, index, arr) => {
//         if (index === arr.length - 1) {
//             resThree += item.name + ' is ' + item.age;
//         } else {
//             resThree += item.name + ' is ' + item.age + ', ';
//         }
//     });
//     return resThree;
// });


// const resFour = handleArray (['abc', '123'], (arr) => {
//     let resFour = '';
//
//     arr.forEach(elem => {
//         for (let i = 1; i <= elem.length; i++) {
//             resFour += elem[elem.length - i];
//         }
//     });
//     return resFour;
// });


// const resFive = handleArray ([1, 2, 3], (arr)=> {
//     let resFive = '';
//
//     arr.forEach((elem, index, arr) => {
//         if (index === arr.length - 1) {
//             resFive += elem + 5 + ' ';
//         } else {
//             resFive += elem + 5 + ', ';
//         }
//     });
//     return resFive;
// });
