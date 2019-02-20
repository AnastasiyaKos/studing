/*
удалить из [1,2,3,4,5] второй и третий элементы
 */

exports.delElem = (array) => {
    const newArray = [];
    for (let i = 0; i < array.length; i++){
        if (i !== 2 && i !==3) {
        newArray.push(array[i])
        } else if (i === 2) {
            newArray.push('three')
        } else {
            newArray.push('four')
        }
    }
    return newArray;
};
// console.log(delElem([1,2,3,4,5]));