function sqInRect(lng, wdth) {
  let squares = []
  let remainingLng = lng
  let remainingWdth = wdth
  if (lng === wdth) {
    return null
  } else {
    for (let i = 0; i < Math.max(remainingLng, remainingWdth); i++) {
      console.log(i, remainingLng, remainingWdth)
        if (remainingLng > remainingWdth) {
          squares.push(remainingWdth)
          remainingLng -= remainingWdth
        } else if (remainingWdth > remainingLng) {
          squares.push(remainingLng)
          remainingWdth -= remainingLng
        }
    }
    return squares
  }
}