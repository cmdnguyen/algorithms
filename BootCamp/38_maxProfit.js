var maxProfit = function (prices) {
    // Create a variable to hold the max profit
    let maxProfit = 0;
    // Loop through the array
    for (var i = 0; i < prices.length; i++) {
        // Loop through the array again
        for (var j = i + 1; j < prices.length; j++) {
            // If the current price minus the next price is greater than the max profit
            if (prices[j] - prices[i] > maxProfit) {
                // Set the max profit to equal the current price minus the next price
                maxProfit = prices[j] - prices[i];
            }
        }
    }
    // Return the max profit
    return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
console.log(maxProfit([2, 4, 1])); // 2