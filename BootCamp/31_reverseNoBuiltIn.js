const reverse = (str) => {
    // Create a variable to hold the new string
    let newStr = "";
    // Loop through the string backwards
    for (let i = str.length - 1; i >= 0; i--) {
        // Add each character to the new string
        newStr += str[i];
    }
    // Return the new string
    return newStr;
};

console.log(reverse("hello")); // olleh
console.log(reverse("world")); // dlrow