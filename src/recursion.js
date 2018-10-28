module.exports = function recursion(obj) {
    let result = [[]];
    let depth = -1; //depth of tree

    fillArray(obj);
    getTree(obj);

    function fillArray(obj) {
        if (obj.left !== undefined && obj.right !== undefined) {
            result.push([]);
            fillArray(obj.left);
        }
    }

    function getTree(obj) {
        ++depth;
        result[depth].push(obj.value);

        if (obj.left !== undefined && obj.right !== undefined) {
            getTree(obj.left);
            --depth;
            getTree(obj.right);
            --depth;
        }
    }

    return result.toString();
};