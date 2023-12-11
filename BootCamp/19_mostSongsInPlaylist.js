var mostSongsInPlaylist = function (arr) {
    // Create a variable to hold the sorted array
    let sortedSongs = arr.sort()
    // Create a variable to hold the total number of songs
    let totalSongs = 0
    // Create a variable to hold the total number of minutes
    let totalMins = 0
    // Loop through the sorted array
    for (let i = 0; i < sortedSongs.length; i++) {
        // Create a variable to hold the current song duration
        const currentSongDuration = sortedSongs[i];
        // If the total number of minutes plus the current song duration is less than or equal to 60, increment the total number of songs
        if (totalMins + currentSongDuration <= 60) {
            // Add the current song duration to the total number of minutes
            totalMins += currentSongDuration
            // Increment the total number of songs
            totalSongs++
            // Otherwise, return the total number of songs
        } else {
            return totalSongs
        }
    }
    // Return the total number of songs
    return totalSongs
};

console.log(mostSongsInPlaylist([3, 4, 2, 1, 7, 5, 3])) // 7
console.log(mostSongsInPlaylist([3, 5, 7, 2, 1, 4, 8, 5, 3, 2, 2, 1, 5, 7, 4, 2, 3, 1, 3, 4, 7, 8, 8, 2])) // 19
console.log(mostSongsInPlaylist([])) // 0