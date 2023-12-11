var fizzBuzz = function(arr) {
    // Create a for loop that iterates through the argument array
    for (let i = 0; i < arr.length; i++) {
        // Create a variable to store the current number in the array
        const currentNum = arr[i];
        // If the current number is divisible by 3 and 5, print 'Fizz Buzz'
        if (currentNum % 15 === 0) {
            console.log('Fizz Buzz')
        // Else if the current number is divisible by 3, print 'Fizz'
        } else if (currentNum % 3 ===0){
            console.log('Fizz')
        // Else if the current number is divisible by 5, print 'Buzz'
        } else if (currentNum % 5 ===0) {
            console.log('Buzz')
        // Else print the current number
        } else {
            console.log(currentNum)
        } 
    }
};

console.log(fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz
console.log(fizzBuzz([1, 2, 3, 4, 5, 15, 20, 25, 30])) // 1 2 Fizz 4 Buzz Fizz Buzz Buzz Fizz Buzz
console.log(fizzBuzz([3, 5, 15, 25, 30, 45, 60])) // Fizz Buzz Fizz Buzz Fizz Buzz Fizz Buzz
