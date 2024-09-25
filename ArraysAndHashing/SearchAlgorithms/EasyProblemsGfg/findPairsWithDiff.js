function findPairWithDiff(arr, diff) {
  for (let i = 0; i < arr.length; i++) {
    let target = arr[i] + diff;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === target) {
        return `Pair Found: (${arr[i]}, ${arr[j]})`;
      }
    }
  }

  return "No such pair found";
}

let arr = [5, 20, 3, 2, 50, 80];
let diff = 78;
console.log(findPairWithDiff(arr, diff)); // Output: Pair Found: (2, 80)

function findPair(arr, size, n) {
  let mpp = new Map();

  for (let i = 0; i < size; i++) {
    if (mpp.has(arr[i])) {
      mpp.set(arr[i], mpp.get(arr[i]) + 1);
    } else {
      mpp.set(arr[i], 1);
    }
    console.log("mpp: ", mpp);

    if (n == 0 && mpp.get(arr[i]) > 1) {
      return true;
    }
  }

  if (n == 0) return false;

  for (let i = 0; i < size; i++) {
    if (mpp.has(n + arr[i])) {
      return true;
    }
  }
  return false;
}

let arr2 = [1, 8, 30, 40, 100];
let size = arr.length;
let n = 60;
console.log("findPair: ", findPair(arr2, size, n));

function findPairWithDiff(arr, diff) {
  let set = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i] - diff)) {
      return `Pair Found: (${arr[i] - diff}, ${arr[i]})`;
    }
    if (set.has(arr[i] + diff)) {
      return `Pair Found: (${arr[i]}, ${arr[i] + diff})`;
    }

    set.add(arr[i]);
  }

  return "No such pair found";
}

console.log(findPairWithDiff(arr2, n));
