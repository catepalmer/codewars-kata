function rgb(r, g, b) {
  const hexes = '0123456789ABCDEF'.split('')
  const rgb = [r, g, b].map(item => {
    if (item < 0) return 0
    else if (item > 255) return 255
    else return item
  })
  return rgb.map(item => hexes[Math.floor(item/16)].toString() + hexes[(item/16-Math.floor(item/16))*16].toString()).join('')
}



// The rgb() method is incomplete. Complete the method so that passing 
// in RGB decimal values will result in a hexadecimal representation being 
// returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) 
// argument values that fall out of that range should be rounded to the 
// closest valid value.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3