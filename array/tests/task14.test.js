const assert = require('chai').assert;
const {sortByPrice} = require('../tasks/task14');

describe('ARRAY TASK14 SORT BY PRICE', () => {
    const products = [
        {title:'prod1', price:5.2}, {title:'prod2', price:0.18},
        {title:'prod3', price:15}, {title:'prod4', price:25},
        {title:'prod5', price:18.9}, {title:'prod6', price:8},
        {title:'prod7', price:19}, {title:'prod8', price:63}
    ];
    it ('Should be: ...price: 18.9, ...price: 19, ...price: 25', (done) => {
        assert.deepEqual(sortByPrice(products, 15, 30), [ { title: 'prod5', price: 18.9 },
            { title: 'prod7', price: 19 },
            { title: 'prod4', price: 25 } ]);
        done()
    })
});