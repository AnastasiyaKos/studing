const text = 'test';
let result = '';
let count = 0;
console.log(text);
let timer = setInterval(function () {
    if(count !== text.length) {
        result = result + text[count];
        console.log(result);
        count++;
    } else {
        console.log('the end');
        clearInterval(timer);
    }
}, 200);


