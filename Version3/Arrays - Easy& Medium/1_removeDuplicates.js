// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
function removeDuplicatesInNonDecreasingArray(a) {
  let x = 0
  for (let i = 0; i < a.length; i++) {
    if (a[i] > a[x]) {
      x = x + 1
      a[x] = a[i]
    }
  }
  return x + 1
}

console.log(removeDuplicatesInNonDecreasingArray([0, 0, 1, 1, 1, 2, 2, 3, 3]))
