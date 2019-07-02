let arr = [12, 4, 50, 1, 0, 18, 40];

console.log(arr.some((element) => {
    if (element === 0) return false;
}));

let arr2 = ['yes', 'hello', 'no', 'easycod', 'what'];
console.log(arr2.some((element) => {
    if (element.length > 3) return true;
}));