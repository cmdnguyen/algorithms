var arraySearch2D = function (arr) {
    // Create a variable to hold the count
    let count = 0;
    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        // Loop through the inner array
        for (let k = 0; k < arr[i].length; k++) {
            // If the current element is equal to "X", increment the count
            if (arr[i][k] === "X") {
                count++;
            }
        }
    }
    // Return the count
    return count
};

console.log(arraySearch2D([
    ["O", "O", "O"],
    ["X", "O", "O"],
    ["O", "O", "X"],
    ["O", "O", "X"]
])) // 3   
console.log(arraySearch2D([
    ["O", "O", "O"],
    ["O", "O", "O"],
    ["O", "O", "O"],
    ["O", "O", "O"]
])) // 0
console.log(arraySearch2D([
    ["X", "O", "O", "O"],
    ["O", "O", "O", "O"],
    ["X", "X", "X", "X"],
    ["O", "O", "O", "O"]
])) // 5
console.log(arraySearch2D([])) // 0