var oddOrEven = function (num) {
    // If num is even, return 'even'
    if (num % 2 === 0) {
        return 'even'
        // Else return 'odd'
    } else {
        return 'odd'
    }
};

console.log(oddOrEven(1002)) // 'even'
console.log(oddOrEven(777)) // 'odd'