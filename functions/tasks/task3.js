/* создать функцию, которая в качестве аргумента принимает строку
из букв и возвращает строку, где каждый символ разделен пробелом
и заменен юникод-значение символа:
getCodeFromText('hello') = "104 101 108 108 111"
 */

exports.getCodeStringFromText = function getCodeStringFromText(str) {
    let res = '';

    for ( let i = 0; i < str.length; i++) {
        if (i < str.length - 1) {
            res += str.charCodeAt(i) + ' ';
        } else {
            res += str.charCodeAt(i);
        }
    }
    return res;
};
