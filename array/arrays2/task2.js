//Преобразование массива в строку
//Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение.
// Элементы массива будут разделены запятой. Получите результат двумя разными методами.

let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

let str1 = vegetables.join(', ');

let str2 = '';
for (let i = 0; i < vegetables.length; i++ ) {
    if ( i === vegetables.length - 1) {
        str2 += vegetables[i]
    } else {
        str2 += vegetables[i] + ', ';
    }
}

console.log(str1);
console.log(str2);