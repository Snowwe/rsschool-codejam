module.exports = function make(...args) {
    function func(...x) {
        if (typeof x[0] === 'function')
            return args.reduce(x[0]);
        args = args.concat(x);
        return func;
    }

    return func;
};

