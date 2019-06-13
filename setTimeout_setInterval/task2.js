function myFunc(text, time) {
    return setTimeout(() => {
        console.log(text);
    }, time);
}

myFunc('loh', 200);
const timerId = myFunc('ya', 600);
//clearTimeout(timerId);