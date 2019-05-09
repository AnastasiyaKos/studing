function printArgs() {
    console.log(arguments);
    arguments.push = [].push;
    arguments.push(' as');

    let result = '';

    console.log(arguments);

    for (let i = 0; i < arguments.length; i++) {
       result += arguments[i];
    };

    return result;
};

console.log(printArgs(['you']));