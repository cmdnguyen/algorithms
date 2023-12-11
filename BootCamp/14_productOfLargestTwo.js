var productOfLargestTwo = function (arr) {
    // Create a variable to hold the largest number
    let largest = null
    // Create a variable to hold the second largest number
    let secondLargest = null
    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        // Create a variable to hold the current number
        const currentNum = arr[i];
        // If the current number is larger than the largest number, set the largest number to the current number
        if (currentNum > largest || largest === null) {
            secondLargest = largest;
            largest = currentNum
            // Otherwise, if the current number is larger than the second largest number, set the second largest number to the current number
        } else if (currentNum > secondLargest || secondLargest === null) {
            secondLargest = currentNum
        }
    }
    // Return the product of the largest number and the second largest number
    return largest * secondLargest
};

console.log(productOfLargestTwo([1, 2, 3, 4, 5])); // 20
console.log(productOfLargestTwo([6, 4, 7, 2, 3])); // 42
console.log(productOfLargestTwo([4, 8, 15, 16, 23, 42])); // 966
console.log(productOfLargestTwo([-10, -5, -2, -15, -1, -33, -88, -100])); // 2