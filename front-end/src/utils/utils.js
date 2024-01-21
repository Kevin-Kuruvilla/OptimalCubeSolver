export function verifyColors(snap) {
  const colorsCount = {
    '#ffffff': 0,
    '#009b48': 0,
    '#b71234': 0,
    '#0046ad': 0,
    '#ff5800': 0,
    '#ffd500': 0
  }

  for (const key in snap.items) {
    if (snap.items.hasOwnProperty(key)) {
      const color = snap.items[key]
      if (colorsCount[color] !== undefined) {
        colorsCount[color]++
      }
    }
  }

  for (const color in colorsCount) {
    if (colorsCount[color] !== 4) {
      console.log(colorsCount)
      return false
    }
  }
  return true
}
