function findMaxSum(arr) {
  let maxSum = Infinity
  let indexes = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] + arr[j]) < Math.abs(maxSum) && arr[i] + arr[j]) {
        maxSum = Math.abs(arr[i] + arr[j])
        indexes = [arr[i], arr[j]]
      }
    }
  }

  return [maxSum, indexes]
}
const arr = [-21, -67, -37, -18, 4, -65]
// [-8, -66, -60]

console.log('findMaxSum: ', findMaxSum(arr))

// solution 2 : optimised

// function findClosestToZero(arr){
//     let maxSum = -Infinity
//     let indexes = []

//     arr.sort(a,b => a-b) // ascending order
//     // [ -66, -60, -8]

//     for()

// }
