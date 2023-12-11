function getIndexesThatMakeTheTaget(str, target) {
    // if the target is longer than the string, return false
    if (str.length < target.length) {
        return false
    }
    // if the target is the same as the string, return [0, target.length-1]
    if (str === target) {
        return [0, target.length - 1]
    }
    // loop through the string
    for (let i = 0; i < str.length; i++) {
        // create a variable to hold the current character
        const currentChar = str[i];
        // if the current character is the first character in the target, check to see if the target is the same as the substring
        if (currentChar === target) {
            return [i, i]
        }
        // if the current character is not the first character in the target, continue
        if (currentChar !== target[0]) {
            continue
        }
        // if the current character is the first character in the target, loop through the string starting at the next index
        for (let j = i + 1; j < str.length; j++) {
            // create a variable to hold the current substring
            var currentSubstring = str.substring(i, j + 1)
            // if the current substring is the same as the target, return the indexes
            if (currentSubstring === target) {
                return [i, j]
            }
            // create a variable to hold the target substring
            var targetSubstring = target.substring(0, currentSubstring.length)
            // if the current substring is the same as the target substring, continue
            if (currentSubstring === targetSubstring) {
                continue
                // if the current substring is not the same as the target substring, break
            } else {
                break
            }

        }
    }
    // if you can't make the target,
    return false

}

console.log(getIndexesThatMakeTheTaget("a", "a"))
console.log(

    getIndexesThatMakeTheTaget("abcdefg", "de")
)
console.log(

    getIndexesThatMakeTheTaget(" hello", "llo")
)
console.log(

    getIndexesThatMakeTheTaget(" hello", "al")
)
console.log(
    getIndexesThatMakeTheTaget("Hello my name is Catherine", "my name is")

)
