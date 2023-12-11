var characterCount = function (str) {
    // Create a variable to hold the result
    let charMap = {}
    // Loop through the string
    for (let i = 0; i < str.length; i++) {
        // Create a variable to hold the current character
        const char = str[i];
        // If the current character is in the map, increment the count
        if (char in charMap) {
            charMap[char]++
            // Otherwise, add the character to the map with a count of 1
        } else {
            charMap[char] = 1
        }
    }
    // Return the result
    return charMap
};

console.log(characterCount('hello')) // { h: 1, e: 1, l: 2, o: 1 }
console.log(characterCount('hello world')) // { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
console.log(characterCount('she sells sea shells by the sea shore')) // { s: 8, h: 4, e: 7, ' ': 7, l: 4, a: 2, b: 1, y: 1, t: 1, o: 1, r: 1 }