/* создать функцию, которая в качестве аргумента принимает строку
из букв и возвращает строку, где каждый символ разделен пробелом
и заменен юникод-значение символа:
getCodeFromText('hello') = "104 101 108 108 111"
 */

function getCodeStringFromText(str) {
    let res = '';

    for ( let i = 0; i < str.length; i++) {
        res += str.charCodeAt(i) + ' ';
    }
    return res;
}

console.log(getCodeStringFromText('hello'))