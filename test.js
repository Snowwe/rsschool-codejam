const assert = require('assert');
const sumOfOther = require('./src/sumOfOther.js');
const make = require('./src/make.js');
const recursion = require('./src/recursion.js');

describe(('Sum of other'), () => {

    it('1', () => {
        const insArr = sumOfOther([2, 3, 4, 1]);
        assert.deepEqual(insArr, [8, 7, 6, 9]);
    });
    it('2', () => {
        const insArr = sumOfOther([2, 3, 2, 3, 2, 3]);
        assert.deepEqual(insArr, [13, 12, 13, 12, 13, 12]);
    });
    it('3', () => {
        const insArr = sumOfOther([9, 7, 5, 3, 1]);
        assert.deepEqual(insArr, [16, 18, 20, 22, 24]);
    });
    it('4', () => {
        const insArr = sumOfOther([10, 11]);
        assert.deepEqual(insArr, [11, 10]);
    });
    it('5 empty array', () => {
        const insArr = sumOfOther([]);
        assert.deepEqual(insArr, []);
    });
    it('6', () => {
        const insArr = sumOfOther([-1, -10, 11]);
        assert.deepEqual(insArr, [1, 10, -11]);
    });
    it('7 one number', () => {
        const insArr = sumOfOther([5]);
        assert.deepEqual(insArr, [0]);
    });

});

describe('Make', () => {
    it('1', () => {
        const sum = (a, b) => a + b;
        const result = make(15)(34, 21, 666)(41)(sum);
        assert.equal(result, 777);
    })

});

describe('Recursion', () => {
    it('1', () => {
        const tree = {
            "value": 100,
            "left": {"value": 90, "left": {"value": 70}, "right": {"value": 99}},
            "right": {"value": 120, "left": {"value": 110}, "right": {"value": 130}}
        };
        const array = recursion(tree);
        assert.equal(array, [[100], [90, 120], [70, 99, 110, 130]]);
    })

});