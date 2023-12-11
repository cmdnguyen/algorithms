var doubleTripleMap = function (arr) {
    // Create a variable to hold the result array
    var result = [];
    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        // Create a variable to hold the current number
        const currentNum = arr[i];
        // If the current number is even, push the current number times two to the result array
        if (currentNum % 2 === 0) {
            result.push(currentNum * 2)
            // Otherwise, push the current number times three to the result array
        } else {
            result.push(currentNum * 3)
        }
    }
    // Return the result array
    return result
};

console.log(doubleTripleMap([1, 2, 3, 4, 5])) // [3, 4, 9, 8, 15]
console.log(doubleTripleMap([2, 4, 6, 8])) // [4, 8, 12, 16]
console.log(doubleTripleMap([-5, 10, 15, 20])) // [-15, 20, 45, 40]