/*
Реализовать модуль, который работает со строкой и имеет метода:
    а. установить строку
        1. если передано пустое значение, то утановить пустую строку
        2. если передано число, чисто привести к строке
    b. получить строку
    c. получить длину строки
    d. получить строку-перевертыш

Пример:
модуль.установитьСтроку('abcde');
модуль.получитьСтроку(); // abcde
модуль.получитьДлину(); // 5
 */

const str = (function () {
    let string = '';
    
    function setString(value) {
        if (string.length === 0) {
            string += value;
        // } else if (!isNan(string)) {
        //     value.toString();
        } else {
            string = value.toString()
        }
        
        //string = value;
    }
    
    function getString() {
        return string;
    }
    
    function getStringLength() {
        return string.length;
    }
    
    function getInvertedString() {
        return string.split("").reverse().join("")
    }

    return {
        setString,
        getString,
        getStringLength,
        getInvertedString
    };
}());

str.setString('jopa');
console.log(str.getString());
console.log(str.getStringLength());
console.log(str.getInvertedString());
