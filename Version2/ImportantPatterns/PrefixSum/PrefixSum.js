function prefixSum(nums, i, j) {
  const sumArray = []
  let sum = 0
  for (let x = 0; x < nums.length; x++) {
    sum += nums[x]
    sumArray.push(sum)
  }
  console.log('sumArray: ', sumArray)
  return sumArray[j] - sumArray[i - 1]
}

const nums = [1, 2, 3, 4, 5, 6],
  i = 1,
  j = 3
console.log('arr=', prefixSum(nums, i, j))
