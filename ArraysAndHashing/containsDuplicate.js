// https://leetcode.com/problems/contains-duplicate/description/


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let numsMap1 = {};
    for (let i = 0; i < nums.length; i++) {
        if (!numsMap1[nums[i]]) {
            numsMap1[nums[i]] = 1;
        } else {
            return true
        }
    }
    return false
};