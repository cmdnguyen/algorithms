var commonElement = function (arrA, arrB) {
    // Create an object to hold the elements of the first array
    var elements = {};
    // Loop through the first array
    for (var i = 0; i < arrA.length; i++) {
        // Create a variable to hold the current element
        var num = arrA[i];
        // Add the current element as a property to the object
        elements[num] = true;
    }
    // Loop through the second array
    for (var i = 0; i < arrB.length; i++) {
        // Create a variable to hold the current element
        var num = arrB[i];
        // If the current element is a property of the object, return it
        if (elements[num] === true) {
            return num;
        }
    }
};

console.log(commonElement([1, 2, 3, 4, 5], [2, 4, 6, 8, 10])); // 2
console.log(commonElement([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])); // undefined
console.log(commonElement([10, 8, 6, 4, 2], [8, 80, 800, 8000, 80000])); // 8