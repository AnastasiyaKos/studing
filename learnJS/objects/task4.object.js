/*
Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.
Если объект пустой, то пусть он выводит «нет сотрудников».
 */

let salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

let maxSalary = 0;
let maxSalaryName = '';
for (let name in salaries) {
    if (maxSalary < salaries[name]) {
        maxSalary = salaries[name];
        maxSalaryName = name;
    }
}

console.log(maxSalaryName);