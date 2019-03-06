//Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
const arr1 = ['a', 'b', 'c'];
const arr2 = [1, 2, 3];

const arrays = arr1.concat(arr2);
console.log(arrays);


//Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе
const a = [1, 2, 3];
const b = [4, 5, 6];

const c = a.concat(b);

console.log(c);


//Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
const arr3 = ['a', 'b', 'c'];
arr3.push(1, 2, 3);

console.log(arr3);


//Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]
const arr4 = [1, 2, 3];
arr4.reverse();

console.log(arr4);


//	Дан массив [1, 2, 3]. Добавьте ему в начало и конец элементы 4, 5, 6.
const arr5 = [1, 2, 3];
arr5.unshift(4, 5, 6);
arr5.push(4, 5, 6);

console.log(arr5);


//Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
const arr6 = ['js', 'css', 'jq'];

console.log(arr6.shift());
console.log(arr6.pop());


//Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
 //С помощью метода slice запишите в новый элементы [4, 5].
const arr7 = [1, 2, 3, 4, 5];
const oneArr7 = arr7.slice(0, 3);
const twoArr7 = arr7.slice(3);

console.log(oneArr7);
console.log(twoArr7);


//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
const arr8 = [1, 2, 3, 4, 5];
arr8.splice(1,2);

console.log(arr8);


//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4]
const arr9 = [1, 2, 3, 4, 5];
const newArr9 = arr9.splice(1, 3);

console.log(newArr9);


//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
const arr10 = [1, 2, 3, 4, 5];
arr10.splice(3, 0, 'a', 'b', 'c');

console.log(arr10);


//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']
const arr11 = [1, 2, 3, 4, 5];
arr11.splice(1, 0, 'a', 'b');
arr11.splice(6, 0, 'c');
arr11.splice(8, 0, 'e');

console.log(arr11);


//Дан массив [3, 4, 1, 2, 7]. Отсортируйте его
const arr12 = [3, 4, 1, 2, 7];
sortArr12 = (curr, next) => {
    if ( curr < next ) return - 1;
    if ( curr > next ) return  1;
};
arr12.sort(sortArr12);

console.log(arr12);


//Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
const obj = {
    js:'test',
    jq: 'hello',
    css: 'world'
};

console.log(Object.keys(obj));

// Переменная lang может принимать два значения: 'ru' и 'en'.
// Переменная month может принимать значения от 0 до 11.
// Если lang имеет значение 'ru', то выведем название месяца, соответствующего содержимому
// переменной month, на русском языке, а если имеет значение 'en' – то на английском.

const months = {
    en : ['January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'],
    ru : ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июля', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
};

const en = months[0];
const ru = months[1];

console.log(months.en[2]);



