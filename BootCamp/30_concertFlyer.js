var concertFlyer = function (magazine, flyer) {
    // Create an array of words from the magazine string
    var magazineWords = magazine.split(' ');
    // Create an array of words from the flyer string
    var flyerWords = flyer.split(' ');
    // Create an object to hold the words from the magazine string
    var magazineMap = {};
    // Create an object to hold the words from the flyer string
    var flyerMap = {};
    // Loop through the magazine words array
    for (var i = 0; i < magazineWords.length; i++) {
        // Create a variable to hold the current word
        var word = magazineWords[i];
        // If the current word is not a property of the object, add it as a property with a value of 1
        if (!magazineMap[word]) {
            magazineMap[word] = 1;
        // Otherwise, increment its value
        } else {
            magazineMap[word]++;
        }
    }
    // Loop through the flyer words array
    for (var i = 0; i < flyerWords.length; i++) {
        // Create a variable to hold the current word
        var word = flyerWords[i];
        // If the current word is not a property of the object, add it as a property with a value of 1
        if (!flyerMap[word]) {
            flyerMap[word] = 1;
        // Otherwise, increment its value
        } else {
            flyerMap[word]++;
        }
    }
    // Loop through the flyer object
    for (var key in flyerMap) {
        // If any value is not equal to the value of the same property in the magazine object, return false
        if (magazineMap[key] !== flyerMap[key]) {
            return false;
        }
    }
    // Otherwise, return true
    return true;
};

console.log(concertFlyer("hello world", "hello world")); // true
console.log(concertFlyer("hello world", "hello world!")); // false
console.log(concertFlyer("Why are there so many songs about rainbows?", "so many songs" )); // true
