// https://leetcode.com/problems/merge-sorted-array/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge1 = function (nums1, m, nums2, n) {
  let p1 = 0,
    p2 = 0
  let nums1Copy = nums1.slice(0, m)
  for (let i = 0; i < m + n; i++) {
    if ((nums1Copy[p1] < nums2[p2] && p1 < m) || p2 >= n) {
      nums1[i] = nums1Copy[p1]
      p1++
    } else {
      nums1[i] = nums2[p2]
      p2++
    }
  }
  return nums1
}

var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1,
    p2 = n - 1

  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) {
      break
    }
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1]
      p1--
    } else {
      nums1[i] = nums2[p2]
      p2--
    }
  }
  return nums1
}

// let nums1 = [1, 2, 3, 0, 0, 0],
//   m = 3,
//   nums2 = [2, 5, 6],
//   n = 3
let nums1 = [1, 2, 4, 5, 6, 0],
  m = 5,
  nums2 = [3],
  n = 1
console.log('merge :', merge(nums1, m, nums2, n))
