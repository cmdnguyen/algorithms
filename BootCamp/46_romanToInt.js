var romanToInt = function(str) {
    // Create a variable to hold the roman numeral values
    var numerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
      };
      // Create a variable to hold the result
      var result = 0;
        // Loop through the string
      for (var i = 0; i < str.length; i++) {
        // Create a variable to hold the current numeral and the next numeral
        var currentNumeral = str[i];
        // If the next numeral exists, create a variable to hold it
        var nextNumeral = str[i + 1];
        // Create a variable to hold the current value and the next value
        var currentValue = numerals[currentNumeral];
        // If the next numeral exists, create a variable to hold its value
        var nextValue = numerals[nextNumeral];
        // If the current value is less than the next value, subtract the current value from the result
        if (currentValue < nextValue) {
          result -= currentValue;
        // Otherwise, add the current value to the result
        } else {
          result += currentValue;
        }
      }
        // Return the result
      return result;
    };

console.log(romanToInt("III")); // 3
console.log(romanToInt("IV")); // 4
console.log(romanToInt("IX")); // 9
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994