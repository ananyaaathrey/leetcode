// https://www.geeksforgeeks.org/find-the-largest-three-elements-in-an-array/
// Given an array with all distinct elements, find the largest three elements.
// Examples :
// Input: arr[] = {10, 4, 3, 50, 23, 90}
// Output: 90, 50, 23
// Input: arr[] = { 6, 8, 9, 2, 1, 10}
// Output: 10, 8, 9

function largestElements(arr) {
  let small = 0,
    medium = 0,
    large = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > large) {
      small = medium;
      medium = large;
      large = arr[i];
    } else if (arr[i] > medium) {
      small = medium;
      medium = arr[i];
    } else if (arr[i] > small) {
      small = arr[i];
    }
  }
  return [small, medium, large];
}
console.log(
  "three largest elements are:",
  largestElements([6, 8, 9, 2, 1, 10])
);
