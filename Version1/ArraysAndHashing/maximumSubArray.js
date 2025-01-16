// https://leetcode.com/problems/maximum-subarray/
// Kadane's Algorithm

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let currentMax = nums[0];
  let finalMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(currentMax + nums[i], nums[i]);
    if (currentMax > finalMax) {
      finalMax = currentMax;
    }
  }
  return finalMax;
};
