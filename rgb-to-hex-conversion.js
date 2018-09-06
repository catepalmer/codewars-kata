function rgb(r, g, b){
  const hexes = '0123456789ABCDEF'.split('')
  const rHex = hexes[Math.floor(r/16)].toString() + hexes[(r/16-Math.floor(r/16))*16].toString()
  const gHex = hexes[Math.floor(g/16)].toString() + hexes[(g/16-Math.floor(g/16))*16].toString()
  const bHex = hexes[Math.floor(b/16)].toString() + hexes[(b/16-Math.floor(b/16))*16].toString()
  return rHex + gHex + bHex
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