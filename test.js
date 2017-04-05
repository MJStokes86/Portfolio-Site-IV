var array = ([1, 2, 3, [4, 5, [6], [ ] ] ]);

console.log(flatten(array));

function flatten(array, mutable) {
    var toString = Object.prototype.toString;
    var arrayTypeStr = '[object Array]';

    var result = [];
    var nodes = (mutable && array) || array.slice();
    var node;

    if(!array.length) {
        return result;
    }

    node = nodes.pop();

        do {
            if (toString.call(node) === arrayTypeStr) {
                nodes.push.apply(nodes, node);
            } else {
                result.push(node);
            }
        } while (nodes.length && (node=nodes.pop()) !== undefined);

        result.reverse();
        return result;
}