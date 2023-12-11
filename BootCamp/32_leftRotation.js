const leftRotation = (arr, positions) => {
    // Loop through the array
    for (var i = 0; i < positions; i++) {
        // Remove the first element from the array and store it in a variable
        let first = arr.shift();
        // Add the first element to the end of the array
        arr.push(first);
        // Continue to the next iteration
        continue;
    }
    // Return the modified array
    return arr;
}

console.log(leftRotation([1, 2, 3, 4, 5], 2)); // [3, 4, 5, 1, 2]
console.log(leftRotation([1, 2, 3, 4, 5], 3)); // [4, 5, 1, 2, 3]
console.log(leftRotation([1, 2, 3], 2)); // [3, 1, 2]