/*
Написать функцию, которая принимает три аргумента: произольный
массив и 2 чисоа, первое из который начальный нмер элемента в массиве,
второе - конечный номер. Функция должна вернуть новый массив, состоящий
и лементо первой коллекции согласно аргументам (с-по):
getNewArray(['a', 'b', 'c', 'd', 'e', 'f'], 2, 4) = ['c', 'd', 'e']
Исходный массив не менять. Циклы не использовать.
 */
//exports.
    function getNewArray() {
     let array = ['a', 'b', 'c', 'd', 'e', 'f'];
    return array.slice(2, 5);
};
console.log(getNewArray());