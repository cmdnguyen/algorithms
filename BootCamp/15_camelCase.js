var camelCase = function (str) {
  // Create a variable to hold the result
  var result = "";
  // Split the string into an array of words
  var words = str.toLowerCase().split(" ");
  // Loop through the words
  for (var i = 0; i < words.length; i++) {
    // Create a variable to hold the current word
    var word = words[i];
    // Split the current word into an array of letters
    var letters = word.split("");
    // If this is not the first word, capitalize the first letter
    if (i > 0) {
      letters[0] = letters[0].toUpperCase();
    }
    // Push the modified word into the result
    result += letters.join("");
  }
  // Return the result
  return result;
};

console.log(camelCase('hello world')) // 'helloWorld'
console.log(camelCase('HELLO WORLD')) // 'helloWorld'
console.log(camelCase('The rain in spain falls mainly on the plain')) // 'theRainInSpainFallsMainlyOnThePlain'