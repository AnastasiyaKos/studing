/*
Создать функцию, которая принимает массив продуктов и две цены.
Функция должна вернуть все продукты, цена которых находится в указанном
диапазоне, и отсортировать от дешевых к дорогим:

conts products = [
{title:'prod1', price:5.2}, {title:'prod2', price:0.18},
{title:'prod3', price:15}, {title:'prod4', price:25},
{title:'prod5', price:18.9}, {title:'prod6', price:8},
{title:'prod7', price:19}, {title:'prod8', price:63}
];
 */

exports.sortByPrice = function sortByPrice(products, minPrice, maxPrice) {
    const newArr = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].price > minPrice && products[i].price <= maxPrice) {
            newArr.push(products[i])
        }
    }
    return newArr.sort((prev, next) => {
        if (prev.price > next.price) return 1;
        if (prev.price < next.price) return -1;
    });
};
const products = [
    {title:'prod1', price:5.2}, {title:'prod2', price:0.18},
    {title:'prod3', price:15}, {title:'prod4', price:25},
    {title:'prod5', price:18.9}, {title:'prod6', price:8},
    {title:'prod7', price:19}, {title:'prod8', price:63}
];
