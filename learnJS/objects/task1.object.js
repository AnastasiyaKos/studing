/*
Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2.
 */

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

multiplyNumeric = (obj) => {
    for (let key in obj) {
        if (isNumeric(obj[key])) {
            obj[key] *= 2;
        }
    }
};

multiplyNumeric(menu);

console.log( 'Width: ' + menu.width + ', height: ' + menu.height + ', title: ' + menu.title );