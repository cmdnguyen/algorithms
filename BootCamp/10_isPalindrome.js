var isPalindrome = function (str) {
    // Create a variable to hold the reversed string
    var reversedStr = str.split('').reverse().join('')
    // If the reversed string is equal to the original string, return true
    if (reversedStr === str) {
        return true
        // Else return false 
    } else {
        return false
    }
};

console.log(isPalindrome('racecar')) // true
console.log(isPalindrome('hello')) // false