var titleCase = function (str) {
    // Create a variable to hold the result
    let result = []
    // Split the string into an array of words
    let words = str.split(' ')
    // Loop through the array of words
    for (let i = 0; i < words.length; i++) {
        // Set the current word to lowercase and split it into an array of letters
        let word = words[i].toLowerCase().split('')
        // Capitalize the first letter of each word
        word[0] = word[0].toUpperCase()
        // Push the capitalized word into the result array
        result.push(word.join(''))
    }
    // Return the result array joined into a string
    return result.join(' ')
};

console.log(titleCase('hello world')) // 'Hello World'
console.log(titleCase('HELLO WORLD')) // 'Hello World'
console.log(titleCase('HeLLo WoRLd')) // 'Hello World'F