function printSecondlargest(arr, arr_size) {
  let largest, second;
  if (arr.length < 2) {
    return "invalid array";
  } else if (arr.length === 2) {
    return arr[0] > arr[1] ? arr[0] : arr[1];
  }

  if (arr[0] > arr[1]) {
    largest = arr[0];
    second = arr[1];
  } else {
    largest = arr[1];
    second = arr[0];
  }

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > largest) {
      second = largest;
      largest = arr[i];
    } else if (arr[i] > second) {
      second = arr[i];
    }
  }

  return second;
}

let arr = [12, 35, 1, 10, 34, 1];
let n = arr.length;
console.log("result : ", printSecondlargest(arr, n));
