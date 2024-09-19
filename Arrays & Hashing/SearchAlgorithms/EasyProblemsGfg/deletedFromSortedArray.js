function binarySearch(arr, low, high, key) {
  if (high < low) return -1;
  let mid = (low + high) / 2;
  if (key == arr[mid]) return mid;
  if (key > arr[mid]) return binarySearch(arr, mid + 1, high, key);
  return binarySearch(arr, low, mid - 1, key);
}

function deleteElement(arr, n, key) {
  let pos = binarySearch(arr, 0, n - 1, key);

  if (pos == -1) {
    document.write("Element not found");
    return n;
  }

  let i;
  for (i = pos; i < n - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr[n - 1] = undefined;

  return arr;
}
console.log("deleteElement:", deleteElement([10, 20, 30, 40, 50], 5, 30));

const arr = [1, 1, 1, 1, 0, 0, 0, 0, 0];
const size = arr.length;
