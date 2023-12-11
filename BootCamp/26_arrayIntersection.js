var arrayIntersection = function (arr1, arr2) {
    // Create a variable to hold the result array
    var result = [];
    // Loop through the first array
    for (let i = 0; i < arr1.length; i++) {
        // Create a variable to hold the current number
        const currentNum = arr1[i];
        // If the second array includes the current number, push the current number to the result array
        if (arr2.includes(currentNum)) {
            result.push(currentNum)
        }
    }
    // Return the result array
    return result
};

console.log(arrayIntersection([1, 2, 3, 4, 5], [2, 4, 6, 8, 10])) // [2, 4]
console.log(arrayIntersection([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])) // []
console.log(arrayIntersection([1, 2, 3], [1, 2, 3])) // [1, 2, 3]