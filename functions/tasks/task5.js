/* создать 2 функции и дать им осмысленные названия:
-первая функция принимает массив и колбэк
-вторая функция(КОЛБЭК) орабатывает каждый элемент массива
Первая функция возвращает строку "New value:" и обрабатывает массив:

firstFunc(['my', 'name', 'is', 'Trinity'], secondFunk) - "New value: MyNamesIsTrinity"
firstFunc([10, 20, 30], secondFunc) - "New value: 100, 200, 300"
firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aron}], secondFunc) -
   "New value: Jhon is 45, Aron is 20"
firstFunc(['abc', '123'], secondFunc) - "New value: cba, 321"
firstFunc([1, 2, 3], function(namber) {return number + 5 + ''}) - New value: 6, 7, 8
 */

function handleArray(arr, handler) {
    return `New value: ${handler(arr)}`
}

const result = handleArray(['my', 'name'], (arr)=>{
    let result = '';

    arr.forEach(elem => {
        result += elem[0].toUpperCase() + elem.slice(1);
    })
    return result;
})

console.log(result)
