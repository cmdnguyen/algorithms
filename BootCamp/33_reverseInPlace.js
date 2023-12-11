const reverseInPlace = (arr) => {
    // Initialize two variables, start and end
    let start = 0;
    let end = arr.length - 1;
    // Loop through the array
    while (start < end) {
        // Swap the start and end elements
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        // Increment start and decrement end
        start++;
        end--;
    }
    // Return the modified array
    return arr;
};


console.log(reverseInPlace([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(reverseInPlace([1, 2, 3, 4])); // [4, 3, 2, 1]