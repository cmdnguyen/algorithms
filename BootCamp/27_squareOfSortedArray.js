var sortedSquares = function (arr) {
    // Create a new array to hold the squared values
    var result = new Array(arr.length);
    // Create three pointers, one for the left side of the array, one for the right side, and one for the result array
    var idx1 = 0;
    var idx2 = arr.length - 1;
    var idx3 = result.length - 1;
    // Loop through the array, starting from the end
    while (idx1 <= idx2) {
        // Create variables for the left and right values
        var left = arr[idx1];
        var right = arr[idx2];
        // If the absolute value of the left is greater than the absolute value of the right, square the left value and add it to the result array
        if (Math.abs(left) > Math.abs(right)) {
            // Add the squared value to the result array
            result[idx3] = left ** 2;
            // Increment the left pointer
            idx1++;
            // Otherwise, square the right value and add it to the result array
        } else {
            // Add the squared value to the result array
            result[idx3] = right ** 2;
            // Decrement the right pointer
            idx2--;
        }
        // Decrement the result array pointer
        idx3--;
    }
    // Return the result array
    return result;
};

console.log(sortedSquares([-4, -1, 0, 3, 10])) // [0,1,9,16,100]
console.log(sortedSquares([-7, -3, 2, 3, 11])) // [4,9,9,49,121]