// https://leetcode.com/problems/third-maximum-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let first = null,
    second = null,
    third = null; // third is greatest of all
  nums.forEach((num) => {
    // if already exists skip
    if (num === first || num === second || num === third) {
      return;
    }
    if (third === null || num > third) {
      first = second;
      second = third;
      third = num;
    } else if (second === null || num > second) {
      first = second;
      second = num;
    } else if (first === null || num > first) {
      first = num;
    }
  });

  return first === null ? third : first;
};

console.log("result  : ", thirdMax([1, 1, 2]));
