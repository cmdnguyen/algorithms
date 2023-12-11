const validBrackets = function (str) {
    // Create a stack to hold the brackets
    let stack = [];
    // Loop through the string
    for (var i = 0; i < str.length; i++) {
        // Create a variable to hold the current character
        let char = str[i];
        // If the current character is an opening bracket, add it to the stack
        if (char === "(" || char === "{" || char === "[") {
            // Add the current character to the stack
            stack.push(char);
            // Continue to the next iteration
            continue;
        }
        // If the current character is a closing bracket, check if it matches the last opening bracket in the stack
        if (char === ")") {
            // If it doesn't match, return false
            if (stack.pop() !== "(") {
                return false;
            }
            // Otherwise, continue
            continue;
        }
        // If the current character is a closing bracket, check if it matches the last opening bracket in the stack
        if (char === "}") {
            // If it doesn't match, return false
            if (stack.pop() !== "{") {
                return false;
            }
            // Otherwise, continue
            continue;
        }
        // If the current character is a closing bracket, check if it matches the last opening bracket in the stack   
        if (char === "]") {
            // If it doesn't match, return false
            if (stack.pop() !== "[") {
                // Otherwise, continue
                return false;
            }
        }
    }
    // If the stack is empty, return true
    return stack.length === 0;
};

console.log(validBrackets("()")); // true
console.log(validBrackets("()[]{}")); // true
console.log(validBrackets("(]")); // false
console.log(validBrackets("([)]")); // false