var zeroesAndOnes = function (str) {
    // Create a zeroCount variable
    let zeroCount = 0;
    // Create a oneCount variable
    let oneCount = 0
    // Loop through the string
    for (let i = 0; i < str.length; i++) {
        // If the current character is a 0, increment zeroCount
        if (str[i] === "0") {
            zeroCount++;
            // If the current character is a 0, increment zeroCount
        } else if (str[i] === "1") {
            oneCount++;
        }
    }
    // If zeroCount equals oneCount, return true
    if (zeroCount === oneCount) {
        return true;
    }
    // Else return false
    return false
};

console.log(zeroesAndOnes("001101")) // true
console.log(zeroesAndOnes("00110")) // false
console.log(zeroesAndOnes("00010")) // false
console.log(zeroesAndOnes("")) // true
console.log(zeroesAndOnes("10101011")) // false