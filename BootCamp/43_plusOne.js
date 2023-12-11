var plusOne = function (digits) {
    // Create a variable to hold the carry
    var carry = 1;
    // Loop through the digits array backwards
    for (var i = digits.length - 1; i >= 0; i--) {
        // Create a variable to hold the current digit plus the carry
        var plusOne = digits[i] + carry;
        // Create a variable to hold the sum
        var sum;
        // Reset the carry to 0
        carry = 0;
        // If the current digit plus the carry is greater than 9
        if (plusOne > 9) {
            // Set the carry to 1
            carry = 1;
            // Set the sum to the difference between 10 and the current digit plus the carry
            sum = 10 - plusOne;
        } else {
            // Else set the sum to the current digit plus the carry
            sum = plusOne;
        }
        // Set the current digit to the sum
        digits[i] = sum;
    }
    // If there is a carry
    if (carry) {
        // Add the carry to the beginning of the digits array
        digits.unshift(carry);
    }
    // Return the digits array
    return digits;
};

console.log(plusOne([1, 2, 3])); // [1, 2, 4]
console.log(plusOne([4, 3, 2, 1])); // [4, 3, 2, 2]
console.log(plusOne([0])); // [1]