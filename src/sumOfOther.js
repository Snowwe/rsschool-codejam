module.exports = function sumOfOther(arr) {

    return arr.map(value =>
        arr.reduce((a, b) =>
            a + b, -value));
};