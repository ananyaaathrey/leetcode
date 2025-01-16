// https://www.geeksforgeeks.org/sort-array-wave-form-2/
// Given an unsorted array of integers, sort the array into a wave array. An array arr[0..n-1] is sorted in wave form if:
// arr[0] >= arr[1] <= arr[2] >= arr[3] <= arr[4] >= …..
// Examples:
// Input:  arr[] = {10, 5, 6, 3, 2, 20, 100, 80}
// Output: arr[] = {10, 5, 6, 2, 20, 3, 100, 80}
// Input: arr[] = {20, 10, 8, 6, 4, 2}
// Output: arr[] = {20, 8, 10, 4, 6, 2}

// Solution 1 : sorting using O(N log N) then swapping arr[i], arr[i+1]
function wavePatternSorting1(arr) {
  arr.sort((a, b) => a - b)
  console.log('arr: ', arr)

  for (let i = 0; i < arr.length - 1; i = i + 2) {
    ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
  }
  return arr
}
console.log(
  'wavePatternSorting1: ',
  wavePatternSorting1([10, 5, 6, 3, 2, 20, 100, 80])
)
// time complexity : O(N log N)
// space complexity : O(1)

// solution 2 : keep even elements greater than even +1
function wavePatternSorting2(arr) {
  // arr.sort((a, b) => a - b)
  console.log('arr: ', arr)

  for (let i = 0; i < arr.length - 1; i = i + 2) {
    if (arr[i] < arr[i + 1]) {
      ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
    }
  }
  return arr
}
console.log(
  'wavePatternSorting2: ',
  wavePatternSorting2([10, 5, 6, 3, 2, 20, 100, 80])
)

// time complexity : O(N)
// space complexity : O(1)
