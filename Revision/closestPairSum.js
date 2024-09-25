function closestPairIndices2(arr) {
  let n = arr.length

  let closestSum = Infinity
  let closestIndices = [-1, -1]

  for (let i = 0; i < n; i++) {
    let x = arr[i]

    let left = i + 1,
      right = n - 1

    while (left <= right) {
      let mid = Math.floor((left + right) / 2)

      let currSum = arr[mid] + x

      // Update closest sum and indices if a closer sum is found
      if (Math.abs(currSum) < Math.abs(closestSum)) {
        closestSum = currSum
        closestIndices = [i, mid]
      } else if (Math.abs(currSum) === Math.abs(closestSum)) {
        // If the current pair has the same absolute value but greater sum, update indices
        if (currSum > closestSum) {
          closestIndices = [i, mid]
        }
      }

      // Move the pointers based on the sum
      if (currSum < 0) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }

  return closestIndices
}
const arr = [-10, -3, 0, 5, 9, 20]
const res = closestPairIndices2(arr)
console.log(`The closest sum to 0 is `, res)
// time complexity : O(nlog n))
// space complexity : O(1)
