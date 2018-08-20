function sqInRect(lng, wdth) {
  let squares = []
  const initialLng = lng
  const initialWdth = wdth
  if (lng === wdth) {
    return null
  } else {
    for (let i = 0; i < Math.max(initialLng, initialWdth); i++) {
      if (lng != 0 && wdth != 0) {
        if (lng > wdth) {
          squares.push(wdth)
          lng -= wdth
        } else if (wdth > lng) {
          squares.push(lng)
          wdth -= lng
        } else if (wdth != 0 || lng != 0){
          squares.push(lng)
          wdth -= lng
          lng -= wdth
        }
      }
    }
    return squares
  }
}