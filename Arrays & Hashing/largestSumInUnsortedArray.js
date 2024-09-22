// https://www.geeksforgeeks.org/find-the-largest-pair-sum-in-an-unsorted-array/
/* Method to return largest pair
    sum. Assumes that there are
    at-least two elements in arr[] */
function findLargestSumPair(arr) {
  if (n < 2) return -1;

  let first, second;
  if (arr[0] > arr[1]) {
    first = arr[0];
    second = arr[1];
  } else {
    first = arr[1];
    second = arr[0];
  }

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second) second = arr[i];
  }
  return first + second;
}

let arr1 = [12, 34, 10, 6, 40];
console.log("Max Pair Sum is " + findLargestSumPair(arr1));
