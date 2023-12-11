var isUnique = function (arr) {
    // Create a variable to hold the numbers we've seen
    let numMap = {}
    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        // Create a variable to hold the current number
        const currentNum = arr[i];
        // If the current number is in the map, return false
        if (numMap[currentNum] === true) {
            return false
        }
        // Otherwise, add the current number to the map
        numMap[currentNum] = true
    }
    // If we've looped through the entire array and haven't returned false, return true
    return true
};

console.log(isUnique([1, 2, 3, 4, 5])) // true
console.log(isUnique([1, 1, 3, 4, 5])) // false
console.log(isUnique([2, 8, 7, 5, 4, 3])) // true
console.log(isUnique([-2, 5, -2, 53, 22, 1])) // false