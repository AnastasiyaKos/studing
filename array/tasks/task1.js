/*Дана произвольная срока 'bcdaeflmjgkhi' - упорядочить буквы
по алфавиту и веуть строку с буквами в обратном порядке.
Оформить в виде функции.
 */

exports.sort = function sort(string) {
    let str = '';
    return str += string.split('').sort().reverse().join('');
}

//console.log(sort('bcdaeflmjgkhi'))
