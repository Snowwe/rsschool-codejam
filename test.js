const assert = require('assert');
const sumOfOther = require('./src/sumOfOther.js');
const make = require('./src/make.js');
const recursion = require('./src/recursion.js');

describe(('Sum of other'), () => {

    it('1', () => {
        const insArr = sumOfOther([2, 3, 4, 1]);
        assert.deepEqual(insArr, [8, 7, 6, 9]);
    })

});

describe('Make', () => {
    it('1', () => {
        const sum = (a, b) => a + b;
        const result = make(15)(34, 21, 666)(41)(sum);
        assert.equal(result, 777);
    })

});

