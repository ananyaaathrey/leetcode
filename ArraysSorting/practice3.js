function twoSum(nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    // [2,3,4,5] [0, 8, 3,5] => if all values are greater than 0 store Math.abs()
    const complement = target - nums[i]

    if (map.has(complement)) {
      return [nums[i], complement]
    }
    map.set(nums[i], complement)
  }
  return []
}
console.log('twoSum(nums, target): ', twoSum([1, 3, 4, 2], 8))

function moveZerosToEnd(nums) {
  let index = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index++] = nums[i]
    }
  }
  while (index < nums.length) {
    nums[index++] = 0
  }
}

console.log('moveZerosToEnd: ', moveZerosToEnd([1, 0, 2, 3, 0, 4]))
