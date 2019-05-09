/*
Есть массив строк arr. Создайте массив arrSorted – из тех же элементов, но отсортированный.
Исходный массив не должен меняться.

var arr = ["HTML", "JavaScript", "CSS"];

    ...код...

alert( arrSorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)
*/

const arr = ["HTML", "JavaScript", "CSS"];
let arrSorted = [...arr];

sorted = (prev, next) => {
    if (prev.length > next.length) return 1;
    if (prev.length < next.length) return -1;
};

arrSorted.sort(sorted);

console.log(arrSorted);
console.log(arr);