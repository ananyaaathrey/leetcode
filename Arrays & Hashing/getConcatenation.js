// https://leetcode.com/problems/concatenation-of-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[i];
    ans[i + nums.length] = nums[i];
  }
  return ans;
};

getConcatenation([1, 2, 1]);
