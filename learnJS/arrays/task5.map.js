/*Код ниже получает из массива строк новый массив, содержащий их длины:

var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = [];
for (var i = 0; i < arr.length; i++) {
  arrLength[i] = arr[i].length;
}

alert( arrLength ); // 4,5,2,5
 */


const arr = ["Есть", "жизнь", "на", "Марсе"];

const arrLenght = arr.map(function (string) {
    return string.length
});

console.log(arrLenght);