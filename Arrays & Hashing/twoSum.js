// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//   // target - nums[i] -> find in array
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (target - nums[i] === nums[j]) {
//         return [i, j];
//       }
//     }
//   }
// };

var twoSum = function (nums, target) {
  const indicesMap = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in indicesMap) {
      return [indicesMap[complement], i];
    }
    indicesMap[nums[i]] = i;
  }

  return [];
};

// // console.log(twoSum([2, 7, 11, 15], 9));
