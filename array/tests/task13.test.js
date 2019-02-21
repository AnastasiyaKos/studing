const assert = require('chai').assert;
const {sortByCores} = require('../tasks/task13');

describe('#ARRAY TASK13 Sort arrays', () => {
    it ('Should be: 1, 2, 3, 4, 4', (done) => {
        assert.deepEqual(sortByCores([
            {cpu: 'intel', info: {cores:2, cache:3}},
            {cpu: 'intel', info: {cores:4, cache:4}},
            {cpu: 'intel', info: {cores:1, cache:1}},
            {cpu: 'intel', info: {cores:3, cache:2}},
            {cpu: 'intel', info: {cores:4, cache:2}}
            ]), [
            {cpu: 'intel', info: {cores:1, cache:1}},
            {cpu: 'intel', info: {cores:2, cache:3}},
            {cpu: 'intel', info: {cores:3, cache:2}},
            {cpu: 'intel', info: {cores:4, cache:4}},
            {cpu: 'intel', info: {cores:4, cache:2}}
        ]);
        done();
    });
});