//Сумма элементов двух массивов
// Напишите код, который создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.


getSumElem = (array1, array2) => {
    let sumElems = [];
    for (let i = 0; i < array1.length; i++) {
        if ( i > array2.length-1) {
            sumElems.push(array1[i])
        } else {
            sumElems.push(array1[i] + array2[i]);
        }
    }
    return sumElems;
};

console.log(getSumElem([2 ], [3, 0, 5, 5]));