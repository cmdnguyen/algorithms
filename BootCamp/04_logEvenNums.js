var logEvenNums = function (num) {
    // Create a for loop that counts from 0 to num
    for (let i = 0; i <= num; i++) {
        // If the current number is even, print it to the console
        if (i % 2 === 0) {
            // Print the current number to the console
            console.log(i)
        }
    }
};

console.log(logEvenNums(10)); // 0, 2, 4, 6, 8, 10