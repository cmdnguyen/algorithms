const peakFinder = function (nums) {
  // Create variables to hold the test index and the compare index
  let testIndex = 0,
    // Set the compare index to the last index in the array
    compareIndex = nums.length - 1;

  // If the length of the array is zero, return 0
  if (nums.length < 1) {
    return 0;
  }
  // If length of array is one, return number in array
  if (nums.length === 1) {
    return nums[0];
  }

  // If has more than one number, compare the numbers
  while (testIndex < compareIndex) {
    // Find middle index of array
    const midIndex = parseInt((testIndex + compareIndex) / 2);
    // If number is greater than one to right
    // Then the set the compareIndex to equal the middle index
    // Else, set the testIndex to equal middle index plus one or one to the right of the middle
    nums[midIndex] > nums[midIndex + 1]
      ? (compareIndex = midIndex)
      : (testIndex = midIndex + 1);
  }
  // Return the number at the test index
  return nums[testIndex];
};

console.log(peakFinder([1, 2, 3, 4, 5, 4, 3, 2, 1])); // 5
console.log(peakFinder([-3, 2, 4, 7, 9, 13, 11, 8, 7, 3, 1])); // 13
console.log(peakFinder([-3, -2, -4, -7])) // -2