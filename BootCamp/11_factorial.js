var factorial = function (num) {
    // Create a variable to hold the result
    let result = 1
    // Loop through the numbers from num down to 1
    for (let i = num; i > 1; i--) {
        // Multiply the result by the current number
        result = result * i
    }
    // Return the result
    return result
};

console.log(factorial(5)); // 120
console.log(factorial(4)); // 24
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1