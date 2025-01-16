function ternarySearch(l, r, arr, target) {
  while (r >= l) {
    let mid1 = l + Math.floor((r - l) / 3);
    let mid2 = r - Math.floor((r - l) / 3);

    if (arr[mid1] === target) {
      return mid1;
    }
    if (arr[mid2] === target) {
      return mid2;
    }

    if (arr[mid1] > target) {
      r = mid1 - 1;
    } else if (arr[mid2] < target) {
      l = mid2 + 1;
    } else {
      l = mid1 + 1;
      r = mid2 - 1;
    }
  }

  return "Not found";
}

let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  l = 0,
  r = 9,
  target = 10;

console.log("index is : ", ternarySearch(l, r, ar, target));

function ternarySearchRecursion(l, r, arr, target) {
  while (r >= l) {
    let mid1 = l + Math.floor((r - l) / 3);
    let mid2 = r - Math.floor((r - l) / 3);

    if (arr[mid1] === target) {
      return mid1;
    }
    if (arr[mid2] === target) {
      return mid2;
    }

    if (arr[mid1] > target) {
      // r = mid1 - 1;
      return ternarySearchRecursion(l, mid1 - 1, arr, target);
    } else if (arr[mid2] < target) {
      // l = mid2 + 1;
      return ternarySearchRecursion(mid2 + 1, r, arr, target);
    } else {
      //   l = mid1 + 1;
      //   r = mid2 - 1;

      return ternarySearchRecursion(mid1 + 1, mid2 - 1, arr, target);
    }
  }

  return "Not found";
}

let arRecursion = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  lRecursion = 0,
  rRecursion = 9,
  targetRecursion = 10;

console.log(
  "index is : ",
  ternarySearchRecursion(lRecursion, rRecursion, arRecursion, targetRecursion)
);
