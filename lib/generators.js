export const incr = (x,y) =>
  letter((x + y * 25) % 26)


// 0 -> a, 26 -> z
const letter = i =>
  (i + 10).toString(36)
