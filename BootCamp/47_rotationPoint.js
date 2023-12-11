var rotationPoint = function(words) {
    // Create a variable to hold the left index
    var left = 0;
    // Create a variable to hold the right index
    var right = words.length - 1;
    // Loop through the array
    while (left <= right) {
        // Create a variable to hold the middle index
      var middle = Math.floor((right + left) / 2);
        // If the middle word is less than the word before it, return the middle index
      if (words[middle] < words[middle - 1]) {
        return middle;
      }
      // If the left word is less than the middle word, search the right side
      if (words[left] > words[middle]) {
        // Set the right index to the middle - 1
        right = middle - 1;
        // Else search the left side
      } else {
        // Set the left index to the middle + 1
        left = middle + 1;
      }
    }
    // Return -1
    return -1;
  };
  

console.log(rotationPoint(['cape', 'cake'])); // 1
console.log(rotationPoint(['grape', 'orange', 'plum', 'radish', 'apple'])); // 4
console.log(rotationPoint(['ptolemaic', 'retrograde', 'supplant', 'undulate', 'xenoepist', 'asymptote', 'babka', 'banoffee', 'engender', 'karpatka', 'othellolagkage'])); // 5