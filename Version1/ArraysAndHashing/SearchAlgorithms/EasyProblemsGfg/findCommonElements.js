// Function to find common elements in three arrays
function commonElements(A, B, C) {
  let i = 0,
    j = 0,
    k = 0;
  let common = [];

  while (i < A.length && j < B.length && k < C.length) {
    if (A[i] === B[j] && B[j] === C[k]) {
      common.push(A[i]);
      i++;
      j++;
      k++;
      // Skip duplicate elements
      while (i < A.length && A[i] === A[i - 1]) i++;
      while (j < B.length && B[j] === B[j - 1]) j++;
      while (k < C.length && C[k] === C[k - 1]) k++;
    } else if (A[i] < B[j]) {
      i++;
    } else if (B[j] < C[k]) {
      j++;
    } else {
      k++;
    }
  }

  return common;
}

let A = [1, 5, 10, 20, 30];
let B = [5, 13, 15, 20];
let C = [5, 20];

let common = commonElements(A, B, C);
console.log("Common Elements:", common.join(" "));
