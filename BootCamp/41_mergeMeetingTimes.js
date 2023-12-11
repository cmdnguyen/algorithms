var mergeMeetingTimes = function(arr) {
    // Create a variable to hold the sorted array
    var sorted = arr.sort((a, b) => a[0] - b[0]);
    // Create a variable to hold the merged array
    var merged = [sorted[0]];
    // Loop through the sorted array
    for (var i = 1; i < sorted.length; i++) {
        // Create a variable to hold the current meeting
        var current = sorted[i];
        // Create a variable to hold the last merged meeting
        var lastMerged = merged[merged.length - 1];
        // If the current meeting start time is less than or equal to the last merged meeting end time
        if (current[0] <= lastMerged[1]) {
            // Set the last merged meeting end time to equal the max of the current meeting end time or the last merged meeting end time
            lastMerged[1] = Math.max(current[1], lastMerged[1]);
        } else {
            // Push the current meeting into the merged array
            merged.push(current);
        }
    }
    // Return the merged array
    return merged;
};

console.log(mergeMeetingTimes([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]])); // [[0, 1], [3, 8], [9, 12]]
console.log(mergeMeetingTimes([[1, 2], [2, 3]])); // [[1, 3]]