// Input: arr[] = {1, 2, 3, 4, 5, 6, 7}
// Output: arr[] = {7, 1, 6, 2, 5, 3, 4}
// Explanation: First 7 is the max value, then 1 is the min value, then 6 is the second max value, then 2 is the second min value, then 5 is the third max value, then 3 is the third min value and at last 4 is the fourth max value.

// Input: arr[] = {1, 2, 3, 4, 5, 6}
// Output: arr[] = {6, 1, 5, 2, 4, 3}
function rearrange(arr) {
  let temp = [],
    large = arr.length - 1,
    small = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || i % 2 === 0) {
      temp[i] = arr[large--];
    } else {
      temp[i] = arr[small++];
    }
  }

  return temp;
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log("result : ", rearrange(arr));
