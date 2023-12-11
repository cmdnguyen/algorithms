var linearSearch = function (arr, target) {
    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        // Create a variable to hold the current number
        const currentNumber = arr[i];
        // If the current number is equal to the target, return the index
        if (currentNumber === target) {
            return i
        }
    }
    // If the target is not found, return -1
    return -1
};

console.log(linearSearch([1, 2, 3, 4, 5], 4)); // 3
console.log(linearSearch([1, 2, 3, 4, 5], 6)); // -1
console.log(linearSearch([8, 22, 3, 0, -2],3))  // 2
console.log(linearSearch([],0)) // -1F