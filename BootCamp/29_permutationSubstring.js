var permutationSubstring = function (str, sub) {
    // Create an object to hold the characters of the substring
    var charMap = {};
    // Loop through the substring
    for (var i = 0; i < sub.length; i++) {
        // Create a variable to hold the current character
        var char = sub[i];
        // If the current character is a property of the object, increment its value
        if (char in charMap) {
            charMap[char]++;
        // Otherwise, add the character as a property to the object
        } else {
            charMap[char] = 1;
        }
    }
// Loop through the string
    for (var i = 0; i < str.length; i++) {
        // Create a variable to hold the current character
        var char = str[i];
        // If the current character is a property of the object, decrement its value
        if (char in charMap) {
            charMap[char] -= 1;
        }
    }
// Loop through the object
    for (var key in charMap) {
        // If any value is greater than 0, return false
        if (charMap[key] > 0) {
            return false;
        }
    }
    // Otherwise, return true
    return true;
};

console.log(permutationSubstring("abc", "cba")); // true
console.log(permutationSubstring("abbc", "cbac")); // false
console.log(permutationSubstring("abbc", "cba")); // true
console.log(permutationSubstring("octmantisplantic", "atlantic ocean")) // false