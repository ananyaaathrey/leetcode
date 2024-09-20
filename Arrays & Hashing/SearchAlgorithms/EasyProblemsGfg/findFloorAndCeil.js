/* Function to get index of ceiling and floor of 
x in arr[low..high] */
// in sorted array
function ceilSearch(arr, low, high, x) {
  let i;

  //   if (x <= arr[low]) return low;

  for (i = low; i < high; i++) {
    if (arr[i] === x) return i;

    if (arr[i] < x && arr[i + 1] >= x) return [i, i + 1];
  }

  return -1;
}

let arr = [1, 2, 8, 10, 10, 12, 19];
let n = arr.length;
let x = 1;
let index = ceilSearch(arr, 0, n - 1, x);
console.log("index: ", index);

// Time Complexity: O(n)
// Space Complexity: O(1)

/* Function to get index of floor of x in
arr[low..high] */
function floorSearch(arr, low, high, x) {
  if (low > high) return -1;

  if (x >= arr[high]) return high;

  var mid = (low + high) / 2;

  if (arr[mid] == x) return mid;

  if (mid > 0 && arr[mid - 1] <= x && x < arr[mid]) return mid - 1;

  if (x < arr[mid]) return floorSearch(arr, low, mid - 1, x);

  return floorSearch(arr, mid + 1, high, x);
}

var index2 = floorSearch(arr, 0, n - 1, x);
console.log("index2: ", index2);
