var maxNum = function (arr) {
    // Create a variable to hold the current max number
    let max = arr[0]
    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        // Create a variable to hold the current number
        let currentNum = arr[i];
        // If the current number is greater than the max number
        if (currentNum > max) {
            // Set the max number to the current number
            max = currentNum
        }
    }
    // Return the max number
    return max
};

console.log(maxNum([1, 2, 3, 4, 5])); // 5
console.log(maxNum([2, 3, -2, 99, 100, 5000, 321])); // 5000