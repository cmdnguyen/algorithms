const multiplyInto20 = function (arr) {
    // Create a variable to hold the numbers we've seen
    const numMap = {};
    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        // Create a variable to hold the current number
        let currentNum = arr[i];
        // Create a variable to hold the number we need to multiply the current number by to get 20
        let neededNumber = 20 / currentNum;
        // If the current number is in the map, return true
        if (numMap[neededNumber]) {
            return true;
        }
        // Otherwise, add the current number to the map
        numMap[currentNum] = true;
    }
    // If we've looped through the entire array and haven't returned true, return false
    return false
};

console.log(multiplyInto20([2, 4, 5, 10, 11])) // true
console.log(multiplyInto20([-2, 5, 50, 2, -10, 18, 20])) // true
console.log(multiplyInto20([4, 8, 15, 16, 23, 42])) // false
console.log(multiplyInto20([])) // false