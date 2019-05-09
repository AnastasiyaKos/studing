/*
Сортировать в порядке УБЫВАНИЯ.
var arr = [5, 2, 1, -10, 8];

alert( arr ); // 8, 5, 2, 1, -10;
 */
let arr = [5, 2, 1, -10, 8];

sortArr = (prev, next) => {
    return next - prev
};

arr.sort(sortArr);

console.log(arr);