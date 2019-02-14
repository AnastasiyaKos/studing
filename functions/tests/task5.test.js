const assert = require('chai').assert;
const {handleArray} = require('../tasks/task5');

describe('#TASK5 return New value', () => {
    it ('Should be New value: MyName', (done) => {
        assert.equal(handleArray(['my', 'name'], (arr)=>{
            let result = '';

            arr.forEach(elem => {
                result += elem[0].toUpperCase() + elem.slice(1);
            });
            return result;
        }), 'New value: MyName');
        done();
    });

    it ('Should be New value: YouLoh', (done) => {
        assert.equal(handleArray(['you', 'loh'], (arr)=>{
            let result = '';

            arr.forEach(elem => {
                result += elem[0].toUpperCase() + elem.slice(1);
            });
            return result;
        }), 'New value: YouLoh');
        done();
    });

    it ('Should be New value: NikitaKotik', (done) => {
        assert.equal(handleArray(['nikita', 'kotik'], (arr)=>{
            let result = '';

            arr.forEach(elem => {
                result += elem[0].toUpperCase() + elem.slice(1);
            });
            return result;
        }), 'New value: NikitaKotik');
        done();
    })
});