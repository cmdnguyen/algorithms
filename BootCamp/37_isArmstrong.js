var isArmstrong = function (num) {
    // Create a variable to hold the sum of the digits
    let sum = 0;
    // Create a variable to hold the length of the number
    let length = num.toString().length;
    // Create a variable to hold the number
    let number = num;
    // Loop through the number
    while (number > 0) {
        // Get the last digit of the number
        let digit = number % 10;
        // Raise the digit to the power of the length of the number
        digit = Math.pow(digit, length);
        // Add the digit to the sum
        sum += digit;
        // Remove the last digit from the number
        number = Math.floor(number / 10);
    }
    // If the sum equals the original number, return true
    if (sum === num) {
        return true;
    }
    // Else, return false
    return false;
};

console.log(isArmstrong(153)); // true
console.log(isArmstrong(123)); // false
console.log(isArmstrong(1634)); // true