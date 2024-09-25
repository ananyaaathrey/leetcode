// two pointer
// Input: arr = [2, 7, 11, 15], target = 9
// Output: [0, 1] (since arr[0] + arr[1] = 2 + 7 = 9)
function twoPointerTwoSum(arr, target) {
  let l = 0,
    r = arr.length - 1;
  while (l < r) {
    const sum = arr[l] + arr[r];
    if (sum === target) {
      return [arr[l], arr[r]];
    } else if (sum < target) {
      l++;
    } else {
      r--;
    }
  }
  return -1;
}
// Time Complexity: O(n), for single iteration over the array
// Auxiliary Space: O(1)

const arr = [2, 7, 11, 15],
  target = 9;
console.log("twoPointerTwoSum: ", twoPointerTwoSum(arr, target));

// using set
function twoPointerTwoSumSet(arr, target) {
  const set = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (set.has(target - arr[i])) {
      return [arr[i], target - arr[i]];
    }
    set.add(arr[i]);
  }
}
// Time Complexity: O(n), for single iteration over the array
// Auxiliary Space: O(n), for hashmap

console.log("twoPointerTwoSumSet: ", twoPointerTwoSumSet(arr, target));
