let date = new Date();
let methods;

//methods = countdoenTimer.getFullYear();

//установить дату, засеть, например через какое время "умрет" cook;
date.setMinutes(date.getMinutes() + 10);

//обязательно присвоить в перменную, чтобы получить дату в нашем формате
date = date.toLocaleString('ru-RU', {
    year: '2-digit',
    month: 'short',
    weekday: 'long'
});

//console.log(countdoenTimer);



//устанавливаем интервал, если хотим останавливать его, то нужно присвоить в перемнную
// let timer = setInterval(() => {
//     console.log(Date.now());
// }, 500);

//fotEach только работает с querySelectorAll, не с живыми коллекциями
let buttons = document.querySelectorAll('.timer_button');

buttons.forEach((value, index) => {
    console.log(value, index);
});

//console.log(buttons);