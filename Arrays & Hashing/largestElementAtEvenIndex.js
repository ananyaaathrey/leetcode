// function to rearrange the elements
// in array such that even positioned are
// greater than odd positioned elements
function assign(arr, N) {
  for (let i = 1; i < N; i++) {
    if (arr[i] > arr[i + 1]) {
      temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }

  return arr;
}

let arr = [1, 2, 2, 1];
let N = arr.length;
console.log("result : ", assign(arr, N));
