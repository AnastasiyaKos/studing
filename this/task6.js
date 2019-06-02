/*
Создать объект с розничной ценой и количеством продуктов. Этот объект должен
соержать метод для получения общей стоимости всех товатов (цена * кол-во продуктов)
 */

let products = {
    amount: 15,
    price: 75,
    getTotalPrice: function () {
        return this.amount * this.price
    }
};

let details = {
    amount: 14,
    price: 8
};

details.getTotalPrice = products.getTotalPrice;
console.log(details.getTotalPrice());