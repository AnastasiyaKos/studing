let dollar,
    getDollar;

(function () {
    let dollar = 0;
    getDollar = function () {
        return dollar;
    }
}());

dollar = 30;
console.log(getDollar());

//функция самовызывающаяся,