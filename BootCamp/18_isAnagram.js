var isAnagram = function (strA, strB) {
    // If the strings are different lengths, return false
    if (strA.length !== strB.length) {
        return false
    }
    // Create a variable to hold the letters we've seen in strA
    let strAMap = {}
    // Create a variable to hold the letters we've seen in strB
    let strBMap = {}
    // Create a variable to hold the length of the strings
    let strLength = strA.length
    // Loop through strA
    for (let i = 0; i < strLength; i++) {
        // Create a variable to hold the length of the strings
        let aLetter = strA[i]
        let bLetter = strB[i]
        // If the current letter is in the map, increment the count
        strAMap[aLetter] = (strAMap[aLetter] || 0) + 1
        strBMap[bLetter] = (strBMap[bLetter] || 0) + 1
    }
    // Loop through the map
    for (var key in strAMap) {
        // If the current letter is not in the map, return false
        if (strAMap[key] !== strBMap[key]) {
            return false
        }
    }
    // If we've looped through the entire string and haven't returned false,
    return true
};

console.log(isAnagram('hello', 'olleh')) // true
console.log(isAnagram('hello', 'world')) // false