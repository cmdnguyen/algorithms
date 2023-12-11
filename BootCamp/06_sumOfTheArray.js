var sumArray = function(arr) {
    // Create a variable to hold the result
    let result = 0
    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        // Add each number to the result
        const currentNum = arr[i];
        // result = result + currentNum
        result += currentNum
    }
    // Return the result
    return result
};

console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([0, 1, -1])); // 0
console.log(sumArray([4, 8, 15, 16, 23, 42])); // 108