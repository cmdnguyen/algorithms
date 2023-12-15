var isPowerOfTwo = function(n) {
    // create a helper function that takes in a val and i
    const power = (val, i) => {
    // if val is equal to n, return true
    if (n === val){
        return true
    }
    // if val is greater than n, return false
    if(i > 31){
        return false
    }
    // return power(val * 2, i+1)
    return power(val * 2, i+1)
    }
    // return power(1, 0)
   return power(1, 0)
};

console.log(isPowerOfTwo(1)) // true
console.log(isPowerOfTwo(16)) // true
console.log(isPowerOfTwo(3)) // false