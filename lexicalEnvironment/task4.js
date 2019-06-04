let greet = 'Hello';
(function () {
    let text = 'World';
    console.log(greet + text);
}());
//выведет ошибку, так как переменная text внутри самовызывающейся
//функции и за ее пределами не видна
console.log(greet + text);