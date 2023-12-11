var intToRoman = function (num) {
    // Create a variable to hold the result string
    var result = '';
    // Create a variable to hold the roman numeral values
    var romanNumerals = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I'
    };
    // Create a variable to hold the keys of the roman numeral values
    var romanKeys = Object.keys(romanNumerals);
    // Loop through the roman numeral keys
    for (var i = romanKeys.length - 1; i >= 0; i--) {
        // Create a variable to hold the current key
        var currentKey = romanKeys[i];
        // While the current key is less than or equal to the number
        while (currentKey <= num) {
            // Add the roman numeral value to the result string
            result += romanNumerals[currentKey];
            // Subtract the current key from the number
            num -= currentKey;
        }
    }
    // Return the result string
    return result;
};

console.log(intToRoman(3)); // III
console.log(intToRoman(4)); // IV
console.log(intToRoman(9)); // IX
console.log(intToRoman(58)); // LVIII
console.log(intToRoman(1994)); // MCMXCIV