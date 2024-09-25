// Given an array of integers which is initially increasing and then decreasing, find the maximum value in the array.
// Examples :
// Input: arr[] = {8, 10, 20, 80, 100, 200, 400, 500, 3, 2, 1}
// Output: 500
// Input: arr[] = {1, 3, 50, 10, 9, 7, 6}
// Output: 50
// Corner case (No decreasing part)
// Input: arr[] = {10, 20, 30, 40, 50}
// Output: 50
// Corner case (No increasing part)
// Input: arr[] = {120, 100, 80, 20, 0}
// Output: 120

// function to find the maximum element
function findMaximum(arr, low, high) {
  var max = arr[low];
  var i;
  for (i = low + 1; i <= high; i++) {
    if (arr[i] > max) max = arr[i];
    else break;
  }
  return max;
}

var arr = [1, 30, 40, 50, 60, 70, 23, 20];
// [120, 100, 80, 20, 0];
// [10, 20, 30, 40, 50];
// [1, 30, 40, 50, 60, 70, 23, 20];
var n = arr.length;
console.log("result: ", findMaximum(arr, 0, n - 1));

function findMaximumBinary(arr, low, high) {
  if (low === high) return arr[low];

  if (high === low + 1 && arr[low] >= arr[high]) return arr[low];

  if (high === low + 1 && arr[low] < arr[high]) return arr[high];
  let mid = Math.floor((low + high) / 2);

  if (mid > 0 && arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) {
    return arr[mid];
  }
  if (arr[mid + 1] > arr[mid]) {
    low = mid + 1;
    return findMaximumBinary(arr, low, high);
  } else if (arr[mid] < arr[mid - 1]) {
    high = mid - 1;
    return findMaximumBinary(arr, low, high);
  }
}
console.log("result binary: ", findMaximumBinary(arr, 0, n - 1));
