// https://leetcode.com/problems/range-sum-query-immutable/
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.sumArray = []
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    this.sumArray.push(sum)
  }
}

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  if (left < 1) {
    return this.sumArray[right]
  }
  return this.sumArray[right] - this.sumArray[left - 1]
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
