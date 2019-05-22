/*
Создать оъект, у которого будет цена товара и его скидка, а также 2 метода:
для получения цены и дял расчета цены с учетом скидки
 */

const price = {
    price: 10,
    discount: '15',
    getPrice: function () {
        console.log(`Товар стоит ${this.price} рублей.`);
        return this.price
    },
    getPriceWithDiscount: function () {
        let priceWithDiscount = this.price - (this.price / 100 * this.discount);
        console.log(`Товар со скидкой стоит ${priceWithDiscount} рублей.`);

        return priceWithDiscount;
    }
};

price.getPrice();
price.getPriceWithDiscount();

