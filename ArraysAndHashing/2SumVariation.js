// https://www.geeksforgeeks.org/check-if-pair-with-given-sum-exists-in-array/

function binarySearch(arr, l, h, target) {
  // O(nlogn)
  while (l < h) {
    const mid = Math.floor(l + h / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
}

function twoSumVariationBinary(arr, target) {
  arr.sort((a, b) => a - b); // O(nlogn)
  console.log("arr: ", arr);

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    console.log("complement: ", complement);
    const complementFoundAtIndex = binarySearch(
      arr,
      i + 1,
      arr.length - 1,
      complement
    );
    if (complementFoundAtIndex) {
      return [arr[i], arr[complementFoundAtIndex]];
    }
  }
  return false;
}

let arr = [0, -1, 2, -3, 1];
let target = -2;

console.log("twoSumVariationBinary: ", twoSumVariationBinary(arr, target));
// Time Complexity: O(n*log(n)), for sorting the array
// Auxiliary Space: O(1)
