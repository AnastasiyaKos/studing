/*
Создать функцию, которая принимает произвольное число массовов
и удаляет из каждого первый элементБ возвращает массивы из
оставшихся значений
*/

exports.changeCollection = function changeCollection() {
    const arrays = [];
    for (let i = 0; i < arguments.length; i++) {
        const tempArr = arguments[i];
        tempArr.shift();
        arrays.push(tempArr);
    }
    return arrays;
};