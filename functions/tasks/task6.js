/* Перепишите функцию, используя оператор '?' или '||'
Следующая функция возвращает true, если параметр age больше 18.
В ином случае она задаёт вопрос confirm и возвращает его результат.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
console.log(checkAge(16))

Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку. Сделайте два варианта функции checkAge:

Используя оператор '?'
Используя оператор ||
*/

function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
    }
}


function checkAgeTwo(youAge) {
    if (youAge > 18) return true || confirm('Родители разрешили?');
    }
}