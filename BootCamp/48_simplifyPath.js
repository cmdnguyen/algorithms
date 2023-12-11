var simplifyPath = function(path) {
    // split the path into an array
    var pathArr = path.split('/');
    // create a result array
    var result = [];
    // loop through the path array
    for (var i = 0; i < pathArr.length; i++) {
        // if the current element is '..', pop the result array
        if (pathArr[i] === '..') {
        result.pop();
        // if the current element is '.' or '', continue
        } else if (pathArr[i] === '.' || pathArr[i] === '') {
        continue;
        // otherwise, push the current element into the result array
        } else {
        result.push(pathArr[i]);
        }
    }
    // return the result array joined with '/'
    return '/' + result.join('/');
};

console.log(simplifyPath("/home/")); // "/home"
console.log(simplifyPath("/../")); // "/"
console.log(simplifyPath("/home//foo/")); // "/home/foo"