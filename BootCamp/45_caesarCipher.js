// Write a function that takes in a string and and an offset and returns a new string with each character moved by the offset

var caesarCipher = function(str, offset) {
    // Create a variable to hold the new string
    var newStr = "";
    // Create a variable to hold the character code
    var charCode = 0;
    // Loop through the string
    for (var i = 0; i < str.length; i++) {
        // Create a variable to hold the character code
        charCode = str.charCodeAt(i);
        // If character code is between 65 and 90 (uppercase)
        if (charCode >= 65 && charCode <= 90) {
        // Add the offset to the character code, mod 26, add 65, convert to character, and add to new string
        newStr += String.fromCharCode(((charCode - 65 + offset) % 26) + 65);
        // If character code is between 97 and 122 (lowercase)
        } else if (charCode >= 97 && charCode <= 122) {
        // Add the offset to the character code, mod 26, add 97, convert to character, and add to new string
        newStr += String.fromCharCode(((charCode - 97 + offset) % 26) + 97);
        // Else add character to new string
        } else {
        newStr += str[i];
        }
    }
    // Return the new string
    return newStr;
};

console.log(caesarCipher("Caesar Cipher", 2)); // returns "Ecguct Ekrjgt"
console.log(caesarCipher("Caesar Cipher", 5)); // returns "Hfjxfw Hnumjw"