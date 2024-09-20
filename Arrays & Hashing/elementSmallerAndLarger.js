// https://www.geeksforgeeks.org/find-the-element-before-which-all-the-elements-are-smaller-than-it-and-after-which-all-are-greater-than-it/
// Function to check
function check(arr, n, ind) {
  let i = ind - 1;
  let j = ind + 1;

  while (i >= 0) {
    if (arr[i] > arr[ind]) {
      return false;
    }
    i--;
  }

  while (j < n) {
    if (arr[j] < arr[ind]) {
      return false;
    }
    j++;
  }

  return true;
}

function findElement(arr, n) {
  for (let i = 1; i < n - 1; i++) {
    if (check(arr, n, i)) {
      return i;
    }
  }

  return -1;
}

let arr = [5, 1, 4, 3, 6, 8, 10, 7, 9];
let n = arr.length;
console.log("Index of the element is " + findElement(arr, n));
// Time Complexity: O(n^2)
// Auxiliary Space: O(1)

// optimised
function findElementOptimised(arr, n) {
  var leftMax = Array(n).fill(0);
  leftMax[0] = Number.MIN_VALUE;
  //   console.log("leftMax: ", leftMax);

  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], arr[i - 1]);
    console.log("leftMax: ", leftMax);
  }

  var rightMin = Number.MAX_VALUE;

  for (let i = n - 1; i >= 0; i--) {
    if (leftMax[i] < arr[i] && rightMin > arr[i]) return i;

    rightMin = Math.min(rightMin, arr[i]);
    console.log("rightMin: ", rightMin);
  }

  return -1;
}

console.log(
  "Index of the element is Optimised : ",
  findElementOptimised(arr, n)
);
// Time Complexity: O(n)
// Auxiliary Space: O(n)
