/*
Даны объект и функция:
let sizes = {
    width:5,
    height: 10
}
let getSquare = function () {
    return this.width * this.height
};
Не изменяя функцию или объект, получить результат функции для объекта.
 */

let sizes = {
    width:5,
    height: 10
};

let getSquare = function () {
    return this.width * this.height
};

console.log(getSquare.call(sizes));