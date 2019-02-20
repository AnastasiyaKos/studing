/*
Вставить в произвольный массив после третьего элемента лбое значение например:
['I', 'am', 'an', 'array'] - ['I', 'am', 'an', 'awesome', 'array'] 
 */

function insert (array, elem) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (i === 2) {
            newArr.push(array[i]);
            newArr.push(elem)
        } else {
            newArr.push(array[i])
        }
    }
    return newArr;
}
console.log(insert(['I', 'am', 'an', 'array'], 'awesome'))
