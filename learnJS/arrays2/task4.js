//Пользователь вводит строку кириллицей разного регистра. Напишите функцию,
// которая принимает строку в качестве аргумента и заменяет регистр каждого символа на противоположный.
// Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должен быть массив [кАжДыЙ оХоТнИк].


const str = prompt('Введите слово', 'КаЖдЫй ОхОтНиК');

changeRegister = (str) => {
    let newStr = str.split('');
    let result = [];
    for ( let i = 0; i < newStr.length; i++ ) {
        if (newStr[i] === newStr[i].toUpperCase()) {
            result.push(newStr[i].toLowerCase());
        } else if (newStr[i] === newStr[i].toLowerCase()) {
            result.push(newStr[i].toUpperCase());
        } else {
            result.push(newStr[i]);
        }
    }
    return result.join('');
};

alert(changeRegister(str));