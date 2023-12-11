var lengthOfLongestSubstring = function(s) {
    // Create a map
    let charMap = {};
    // Create a variable to hold the result
    let result = 0;
    // Create a variable to hold the start
    let start = 0;
    // Loop through the string
    for (let i = 0; i < s.length; i++) {
        // Create a variable to hold the current character
        const char = s[i];
        // If the current character is in the map and the start is less than or equal to the current character in the map
        if (charMap[char] !== undefined && charMap[char] >= start) {
            // Set the start to equal the character in the map plus one
            start = charMap[char] + 1;
        }
        // Set the character in the map to equal the current index
        charMap[char] = i;
        // Set the result to equal the max of the result or the current index minus the start plus one
        result = Math.max(result, i - start + 1);
    }
    // Return the result
    return result;
};

console.log(lengthOfLongestSubstring("abcabcbb")) //3
console.log(lengthOfLongestSubstring("bbbbb")) //1
console.log(lengthOfLongestSubstring("pwwkew")) //3