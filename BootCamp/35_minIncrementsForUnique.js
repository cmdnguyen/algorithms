const minIncrement = function (nums) {
    // Create an object to hold the unique numbers
    let uniqueNums = {};
    // Create a variable to hold the number of increments
    let increments = 0;
    // Loop through the array
    for (var i = 0; i < nums.length; i++) {
        // While the current number is already in the object, increment it and increment the number of increments
        while (uniqueNums[nums[i]] === true) {
            // Increment the current number
            nums[i] += 1;
            // Increment the number of increments
            increments++;
        }
        // Add the current number to the object
        uniqueNums[nums[i]] = true;
    }
    // Return the number of increments
    return increments;
};

console.log(minIncrement([1, 2, 2])); // 1
console.log(minIncrement([3, 2, 1, 2, 1, 7])); // 6
console.log(minIncrement([0, 0, 1, 2, 2, 3, 0])); // 13