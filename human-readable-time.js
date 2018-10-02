function formatDuration(seconds) {
    let string = ''
    const years = Math.floor(seconds / 31557600)
    const days = Math.floor(seconds / 86400)
    const hours = Math.floor(seconds / 3600)
    const mins = Math.floor(seconds / 60 - hours * 60)
    const secs = seconds - hours * 3600 - mins * 60
    const numArr = [years, days, hours, mins, secs]
    const strArr = ['year', 'day', 'hour', 'minute', 'second']
    let count = 0
    let newArr = numArr.map(val => {
        let tempStr = (val > 0) ? `${val.toString()} ${strArr[count]}` : ``
        if (val > 1) tempStr += `s`
        count++
        return tempStr
    })
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] == '') {
            newArr.splice(i, 1)
        }
    }
    return newArr.map((val, i) => {
        if (i < newArr.length -2) return `${val}, `
        else if (i < newArr.length -1) return `${val} and `
        else return val
    }).join('')
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


// Expected: '182 days, 1 hour, 44 minutes and 40 seconds', instead 
// got: '4369 hours, 44 minutes and 40 seconds'
// Expected: '4 years, 68 days, 3 hours and 4 minutes', instead got: 
// '36675 hours and 4 minutes'
// Expected: '6 years, 192 days, 13 hours, 3 minutes and 54 seconds', 
// instead got: '57181 hours, 3 minutes and 54 seconds'
// Expected: '8 years, 12 days, 13 hours, 41 minutes and 1 second', 
// instead got: '70381 hours, 41 minutes and 1 second'
// Expected: '7 years, 246 days, 15 hours, 32 minutes and 54 seconds', 
// instead got: '67239 hours, 32 minutes and 54 seconds'
// Expected: '3 years, 85 days, 1 hour, 9 minutes and 26 seconds', 
// instead got: '28321 hours, 9 minutes and 26 seconds'
// Expected: '1 year, 19 days, 18 hours, 19 minutes and 46 seconds', 
// instead got: '9234 hours, 19 minutes and 46 seconds'