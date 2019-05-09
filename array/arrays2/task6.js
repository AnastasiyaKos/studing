//Високосным годом является каждый четвертый год и века начинаются только на высокостные года,
//отличие високосного года от обычного заключается в появлении 366-го дня.
//Напишите функцию chooseYears(start, end), которая принимает в качестве аргументов диапозон лет и
//возвращает массив високосных лет в заданном диапазоне.

chooseYears = (start, end) => {
    let yearArray = [];
    for ( let i = start; i <= end; i++ ) {
        yearArray.push(i);
    }
    let result = [];

    yearArray.forEach(function (year) {
        if (getLeapYear(year))
            result.push(year)
    });

    return result;
};

getLeapYear = year => {
   if ((year % 4 === 0 && year % 100 !== 0) ||
       (year % 100 === 0 && year % 400 === 0)) {
       return year;
   }
};

console.log(chooseYears(2000, 2018));