// https://leetcode.com/problems/top-k-frequent-elements/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const numsMap = new Map();

  for (let num of nums) {
    numsMap.set(num, (numsMap.get(num) || 0) + 1);
  }

  const sortedByFrequency = Array.from(numsMap.entries()).sort(
    (a, b) => b[1] - a[1]
  );

  return sortedByFrequency.slice(0, k).map((entry) => entry[0]);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3, 1], 2));
