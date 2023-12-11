var smallestDifference = function (arr1, arr2) {
    // Create a variable to hold the smallest difference
    let smallestDiff = Infinity;
    // Create a variable to hold the pair of numbers
    let pair = [];
    // Loop through the first array
    for (let i = 0; i < arr1.length; i++) {
        // Loop through the second array
        for (let j = 0; j < arr2.length; j++) {
            // Find the difference between the two numbers
            let difference = Math.abs(arr1[i] - arr2[j]);
            // If the difference is smaller than the smallest difference
            if (difference < smallestDiff) {
                // Set the smallest difference to the difference
                smallestDiff = difference;
                // Set the pair to the two numbers
                pair = [arr1[i], arr2[j]];
            }
        }
    }
    // Return the pair
    return pair;
};

console.log(smallestDifference([1, 3, 15, 11, 2], [23, 127, 235, 19, 8])); // [11, 8]
console.log(smallestDifference([1, 2, 3], [4, 5, 6])); // [3, 4]
console.log(smallestDifference([1, 2, 11, 15], [4, 12, 19, 23, 127, 235])); // [11, 12]