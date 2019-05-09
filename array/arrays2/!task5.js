//Удалить повторяющиеся элементы массива
// Напишите функцию removeDuplicates(arr), которая возвращает массив,
// в котором удалены повторяющиеся элементы из массива arr (игнорируйте чувствительность к регистру).

arr = ["php", "php", "css", "css",
    "script", "script", "html", "html", "java"];

removeDuplicates = (arr) => {
    let obj = {};
    for ( let i = 0; i < arr.length; i++ ) {
        let newArr = arr[i].toLowerCase();

        obj[newArr] = arr[i]; // сохраняет только одно значение с таким ключом
    }

    let result = [];

    for ( let key in obj ) result.push(obj[key])
    return result;
};

console.log(removeDuplicates(arr));