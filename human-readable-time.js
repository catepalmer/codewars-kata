function formatDuration(seconds) {
    let string = ''
    const hours = Math.floor(seconds / 3600)
    const mins = Math.floor(seconds / 60 - hours * 60)
    const secs = seconds - hours * 3600 - mins * 60
    if (hours > 0) {
        string += `${hours.toString()} hour`
        if (hours > 1) string += `s`
        if (mins > 0 && secs > 0) string += `, `
        if (mins > 0 && secs == 0) string += ` and `
        if (mins == 0 && secs > 0) string += ` and `
    }
    if (mins > 0) {
        string += `${mins.toString()} minute`
        if (mins > 1) string += `s`
        if (secs > 0) string += ` and `
    }
    if (secs > 0) {
        string += `${secs.toString()} second`
        if (secs > 1) string += `s`
    }
    return string
  }







//   function humanReadable(seconds) {
//     let string = ''
//     const hours = Math.floor(seconds / 3600)
//     const mins = Math.floor(seconds / 60 - hours * 60)
//     const secs = seconds - hours * 3600 - mins * 60
//     (hours > 0) ? string += `${hours.toString()} hour` : ''
//     (hours > 1) ? string += `s` : string += ''
//     (hours > 0 && mins > 0 && secs > 0) ? string += ', ' : string += ''
//     (hours > 0 && mins > 0 && secs == 0) ? string += ' and ' : string += ''
//     (hours > 0 && mins > 0 && secs == 0)
    
//   }






// Write a function, which takes a non-negative integer (seconds) as 
// input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.



// Test Results:
// Expected: '1 second', instead got: '0:0:1'
// Expected: '1 minute and 2 seconds', instead got: '0:1:2'
// Expected: '2 minutes', instead got: '0:2:0'
// Expected: '1 hour', instead got: '1:0:0'
// Expected: '1 hour, 1 minute and 2 seconds', instead got: '1:1:2'