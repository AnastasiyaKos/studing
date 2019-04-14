const arr = [1, '2', 'awv'];

function kasuka() {
    let result = [];

    for (let i = 0; i < arguments.length; i++) {
        result.push(arguments[i]);
    }

    return result;
};

console.log(kasuka(arr, 'gh', 54, []));

function kasuka2() {
    let result = [];

    for (let i = 0; i < arguments.length - 1 ; i++) {
        if (i !== arguments[arguments.length-1] - 1) {
            result.push(arguments[i]);
        }
    }

    return result;
}
console.log(kasuka2(arr, 'gh', 54, [], 2));


function kasuka3() {
    let result = '';

    for (let i = 0; i < arguments.length; i++) {
        result += (arguments[i] + ', ')
    }

    return result;
}

console.log(kasuka3(arr, 'gh', 54, 2));

