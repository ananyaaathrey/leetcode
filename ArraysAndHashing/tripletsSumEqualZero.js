// Function to find pairs with a given sum using "2SUM
// Problem" approach
function findPairs(arr, start, target, firstEle) {
  const st = new Set();
  const result = [];
  for (let i = start; i < arr.length; ++i) {
    const thirdEle = target - arr[i];

    if (st.has(thirdEle)) {
      result.push([firstEle, arr[i], thirdEle]);
    }
    st.add(arr[i]);
  }
  return result;
}

function findTriplets(arr) {
  const result = [];

  for (let i = 0; i < arr.length - 1; ++i) {
    const target = -arr[i];

    const pairs = findPairs(arr, i + 1, target, arr[i]);

    result.push(...pairs);
  }
  return result;
}

const arr = [0, -1, 2, -3, 1];
const result = findTriplets(arr);
console.log("result: ", result);

function findPairsTwoPointer(arr, start, target, firstEle) {
  let result = [];
  let sortedArr = arr.slice(start).sort((a, b) => a - b);

  let l = 0,
    r = sortedArr.length - 1;

  while (l < r) {
    let sum = sortedArr[l] + sortedArr[r];
    if (sum === target) {
      result.push([firstEle, sortedArr[l], sortedArr[r]]);
      l++;
      r--;
    } else if (sum < target) {
      l++;
    } else {
      r--;
    }
  }
  return result;
}

function findTripletsTwoPointer(arr) {
  let result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let target = -arr[i];

    let pairs = findPairsTwoPointer(arr, i + 1, target, arr[i]);

    result = result.concat(pairs);
  }
  return result;
}

const resultTwoPointer = findTripletsTwoPointer(arr);
console.log("findTripletsTwoPointer: ", resultTwoPointer);
