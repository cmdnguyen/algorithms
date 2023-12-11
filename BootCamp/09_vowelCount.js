var vowelCount = function (str) {
    // Create a variable to hold the result
    let result = 0
    // Create a variable to hold all vowels
    var vowel = ['a', 'e', 'i', 'o', 'u']
    // Loop through the string
    for (let i = 0; i < str.length; i++) {
        // Create a variable to hold the current letter
        var letter = str[i].toLowerCase()
        // If the current letter is a vowel, increment the result
        if (vowel.indexOf(letter) !== -1) {
            result += 1
        }
    }
    // Return the result
    return result
};

console.log(vowelCount('hello')) // 2
console.log(vowelCount('programmer')) // 3
console.log(vowelCount('I think, therefore I am.')) // 8
console.log(vowelCount('')) // 0