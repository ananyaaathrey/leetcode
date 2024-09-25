// Given an array arr[] of size N-1 with integers in the range of [1, N],
// the task is to find the missing number from the first N integers.

// Note: There are no duplicates in the list.

// Examples:

// Input: arr[] = {1, 2, 4, 6, 3, 7, 8} , N = 8
// Output: 5
// Explanation: Here the size of the array is 8, so the range will be [1, 8]. The missing number between 1 to 8 is 5

// Input: arr[] = {1, 2, 3, 5}, N = 5
// Output: 4
// Explanation: Here the size of the array is 4, so the range will be [1, 5]. The missing number between 1 to 5 is 4

function missingNumber(n, arr) {
  const hash = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    hash[arr[i]]++;
  }

  for (let i = 1; i <= n; i++) {
    if (hash[i] === 0) {
      return i;
    }
  }

  return -1;
}

// Driver code
const arr = [1, 2, 3, 5];
const n = 5;
console.log(missingNumber(n, arr));
