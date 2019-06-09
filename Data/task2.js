let date = new Date(2016, 0);
date = date.toLocaleString('ru-RU', {
    weekday: 'long'
});
console.log(date);

let date2 = new Date(1985, 2, 29);
date2 = date2.toLocaleString('ru-RU', {
    weekday: 'long'
});
console.log(date2);

// сколько прошло недель с 2017 по сегодняшний
let lastDate = new Date(2017, 0, 1);
let now = Date.now();
let diffDate = (now - lastDate);
diffDate = diffDate / 1000 / 60 / 60 / 24 / 7;
console.log(diffDate);


