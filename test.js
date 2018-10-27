const assert = require('assert');
const sumOfOther= require('./src/sumOfOther.js');

describe(('Sum of other'), () => {

    it('1', () => {
        const insArr = sumOfOther([2, 3, 4, 1]);
        assert.deepEqual(insArr, [8, 7, 6, 9]);
    })

});