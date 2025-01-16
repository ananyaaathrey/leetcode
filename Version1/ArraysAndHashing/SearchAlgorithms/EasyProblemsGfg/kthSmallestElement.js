function kthSmallest(matrix, k) {
  const n = matrix.length;
  console.log("n: ", n);
  const minHeap = [];

  for (let i = 0; i < Math.min(n, k); i++) {
    minHeap.push([matrix[i][0], i, 0]); // [value, row, col]
  }
  console.log("minHeap: ", minHeap);

  minHeap.sort((a, b) => a[0] - b[0]);
  console.log("minHeap: ", minHeap);

  let val;
  for (let i = 0; i < k; i++) {
    val = minHeap[0];
    minHeap.shift();
    console.log("--- minHeap: ", minHeap);

    const [value, row, col] = val;

    if (col + 1 < n) {
      minHeap.push([matrix[row][col + 1], row, col + 1]);
      console.log("-- minHeap: ", minHeap);
      minHeap.sort((a, b) => a[0] - b[0]);
      console.log("- minHeap: ", minHeap);
    }
    console.log("----------");
  }

  return val[0];
}

const matrix = [
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [24, 29, 37, 48],
  [32, 33, 39, 50],
];
const k = 3;
console.log(kthSmallest(matrix, k)); // Output: 20
