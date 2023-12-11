var mergeSorted = function (arr1, arr2) {
    // Create a variable to hold the result array
    var result = [];
    // Create a variable to hold the first index
    var idx1 = 0;
    // Create a variable to hold the second index
    var idx2 = 0;
    // Loop through the arrays
    while (idx1 < arr1.length && idx2 < arr2.length) {
        // Create a variable to hold the first number
        var num1 = arr1[idx1];
        //Create a variable to hold the second number
        var num2 = arr2[idx2];
        // If the first number is less than the second number, push the first number to the result array and increment the first index
        if (num1 < num2) {
            result.push(num1);
            idx1++;
            // Otherwise, push the second number to the result array and increment the second index
        } else {
            result.push(num2);
            idx2++;
        }
    }
    // Loop through the first array
    while (idx1 < arr1.length) {
        // Create a variable to hold the first number
        var num1 = arr1[idx1];
        // Push the first number to the result array and increment the first index
        result.push(num1);
        idx1++;
    }
    // Loop through the second array
    while (idx2 < arr2.length) {
        // Create a variable to hold the second number
        var num2 = arr2[idx2];
        // Push the second number to the result array and increment the second index
        result.push(num2);
        idx2++;
    }
    // Return the result array
    return result;
};

console.log(mergeSorted([1, 2, 3, 4, 5], [2, 4, 6, 8, 10])); // [1, 2, 2, 3, 4, 4, 5, 6, 8, 10]
console.log(mergeSorted([1, 3, 5], [2, 4, 6, 8, 10])); // [1, 2, 3, 4, 5, 6, 8, 10]