let arr = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10];

let newArr = arr.map((digit, odd) => {
    if (digit % 2 == 0) {
        odd = 'true';
    } else {
        odd = 'false';
    }

    return {
        digit,
        odd
    }
});

console.log(newArr);

