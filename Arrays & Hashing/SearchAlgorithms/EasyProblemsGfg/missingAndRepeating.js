function findMissingAndRepeating(arr) {
  const n = arr.length;
  const set = new Set();
  let repeating = -1;
  let actualSum = 0;

  for (const num of arr) {
    if (set.has(num)) {
      repeating = num;
    } else {
      set.add(num);
    }
    actualSum += num;
  }

  const expectedSum = (n * (n + 1)) / 2;

  const missing = expectedSum - (actualSum - repeating);

  return { missing, repeating };
}

const arr1 = [3, 1, 3];
console.log(findMissingAndRepeating(arr1)); // Output: { missing: 2, repeating: 3 }

const arr2 = [4, 3, 6, 2, 1, 1];
console.log(findMissingAndRepeating(arr2)); // Output: { missing: 5, repeating: 1 }

// function printTwoElements(arr) {
//   const n = arr.length;

//   const visited = new Array(n + 1).fill(false);
//   console.log("visited: ", visited);

//   let repeating = -1;
//   let missing = -1;

//   for (let i = 0; i < n; i++) {
//     if (visited[arr[i]]) {
//       repeating = arr[i];
//     } else {
//       visited[arr[i]] = true;
//     }
//   }
//   console.log("visited: ", visited);

//   for (let i = 1; i <= n; i++) {
//     if (!visited[i]) {
//       missing = i;
//       break;
//     }
//   }

//   console.log("Repeating :", repeating);
//   console.log("Missing :", missing);
// }

// const arr = [7, 3, 4, 5, 5, 6, 2];
// printTwoElements(arr);

// function printTwoElements(arr) {
//   let n = arr.length;
//   let missing = (n * (n + 1)) / 2; // sum of N
//   console.log("Repeating");

//   for (let i = 0; i < n; i++) {
//     let absValue = Math.abs(arr[i]);
//     console.log("absValue: ", absValue);
//     if (arr[absValue - 1] > 0) {
//       arr[absValue - 1] = -arr[absValue - 1];
//       missing -= absValue; // subtract unique elements
//     } else {
//       console.log(absValue);
//     }
//     console.log("arr: ", arr);
//   }

//   console.log("Missing " + missing);
// }

// let arr = [7, 3, 4, 5, 5, 6, 2];
// printTwoElements(arr);

function getTwoElements(arr) {
  let n = arr.length;
  let xor1 = 0; // Will hold xor of all elements and numbers from 1 to n
  let x = 0,
    y = 0;

  for (let i = 0; i < n; i++) {
    xor1 ^= arr[i];
    console.log("xor1: ", xor1);

    xor1 ^= i + 1; // 1 to n numbers
    console.log("xor1: ", xor1);
    console.log("---------");
  }

  let set_bit_no = xor1 & ~(xor1 - 1);

  for (let i = 0; i < n; i++) {
    if (arr[i] & set_bit_no) {
      x ^= arr[i];
    } else {
      y ^= arr[i];
    }

    if ((i + 1) & set_bit_no) {
      x ^= i + 1;
    } else {
      y ^= i + 1;
    }
  }

  console.log("Missing and Repeating (In any order):", x, y);
}

let arr = [1, 3, 4, 5, 5, 6, 2];
getTwoElements(arr);
