/*
Напишите код, который отсортирует массив объектов people по полю age.
 */

let vasya = { name: "Вася", age: 23 };
let masha = { name: "Маша", age: 18 };
let vovochka = { name: "Вовочка", age: 6 };

let people = [ vasya , masha , vovochka ];

sortArr = (prev, next) => {
    if ( prev.age > next.age ) return 1;
    if ( prev.age < next.age ) return -1;
};

people.sort(sortArr);

console.log(people);

for ( let i = 0; i < people.length; i++) {
    console.log(people[i].name)
}