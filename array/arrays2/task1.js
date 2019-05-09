//1. Клонирование массива
//Напишите функцию copyArr(arr), которая копирует массив не изменяя иригинал.

const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
function arrayClone(arr) {
    return [...arr];
}

const arr1 = arrayClone(vegetables);
console.log(arr1);

