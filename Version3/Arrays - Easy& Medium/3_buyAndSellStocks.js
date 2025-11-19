// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
var buyNSell = function (a) {
  let n = a.length,
    min = a[0],
    maxP = 0
  for (let i = 1; i < n; i++) {
    if (a[i] - min > maxP) {
      maxP = a[i] - min
    }
    if (a[i] < min) {
      min = a[i]
    }
  }
  return maxP
}

console.log('buyNSell : ', buyNSell([7, 1, 5, 3, 6, 4]))
console.log('buyNSell : ', buyNSell([7, 6, 4, 3, 1]))
console.log('buyNSell : ', buyNSell([1, 2, 3, 4]))
console.log('buyNSell : ', buyNSell([7, 9, 3, 4]))
