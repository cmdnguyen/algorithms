var isPerfectSquare = function (num) {
    // Create a variable to hold the current square
    let i = 0
    // Loop until the square is greater than the number
    while (true) {
        // Create a variable to hold the current square
        var square = i * i
        // If the square is equal to the number, return true
        if (square === num) {
            return true
            // If the square is greater than the number, return false
        } else if (square > num) {
            return false
            // Otherwise, increment i
        } else {
            i++
        }
    }
};

console.log(isPerfectSquare(1)) // true
console.log(isPerfectSquare(2)) // false
console.log(isPerfectSquare(4)) // true
console.log(isPerfectSquare(8)) // false
console.log(isPerfectSquare(9)) // true
console.log(isPerfectSquare(100)) // true