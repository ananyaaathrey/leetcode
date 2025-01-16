// function binarySearch(arr, target) {
//   let mid, low, high
//   low = 0
//   high = arr.length - 1
//   let lastIndex = -1
//   while (high >= low) {
//     mid = low + Math.floor(high - low / 2)

//     if (arr[mid] === target) {
//       lastIndex = mid
//       //   high = mid - 1  [0,0,0,1,1,1,1]
//       //   return mid
//     } else if (arr[mid] > target) {
//       high = mid - 1
//     } else {
//       low = mid + 1
//     }
//   }
//   return -1
// }

// const arr = new Array(2, 3, 4, 10, 40)
// const target = 40
// console.log('binarySearch: ', binarySearch(arr, target))

// function binarySearchRecursion(arr, target, low, high) {
//   //   let low, mid, high
//   // low=0, high= arr.length-1
//   let mid
//   while (high >= low) {
//     mid = low + Math.floor(high - low / 2)
//     if (arr[mid] === target) {
//       return mid
//     } else if (arr[mid] > target) {
//       high = mid - 1
//       return binarySearchRecursion(arr, target, low, high)
//     } else {
//       low = mid + 1
//       return binarySearchRecursion(arr, target, low, high)
//     }
//   }
//   return -1
// }

// console.log(
//   'binarySearchRecursion: ',
//   binarySearchRecursion(arr, target, 0, arr.length - 1)
// )

// function missingNumber(n, arr) {
//   let xor1 = 0,
//     xor2 = 0

//   // XOR all array elements
//   for (let i = 0; i < n - 1; i++) {
//     xor2 ^= arr[i]
//     // console.log('xor2: ', xor2)
//   }

//   // XOR all numbers from 1 to n
//   for (let i = 1; i <= n; i++) {
//     xor1 ^= i
//     // console.log('xor1: ', xor1)
//   }
//   //   console.log('final: ', xor1, xor2)

//   // Missing number is the XOR of xor1 and xor2
//   return xor1 ^ xor2
// }

// // Driver code
// const arr2 = [1, 2, 3, 5]
// const n = 5
// console.log(missingNumber(n, arr2))

// function missingNumberInRange(arr, low, high) {
//   let xor1 = 0,
//     xor2 = 0
//   // xor of every element
//   for (let i = low; i <= high; i++) {
//     xor1 = xor1 ^ i
//   }
//   // xor with current array elements
//   for (let i = 0; i < high - low; i++) {
//     xor2 = xor2 ^ arr[i]
//   }

//   return xor1 ^ xor2
// }

// console.log(
//   'missingNumberInRange: ',
//   missingNumberInRange([10, 11, 13, 15], 10, 13)
// )

// You are given two numbers 'A' and 'B' in the form of two arrays (A[] and B[]) of lengths 'N' and 'M' respectively, where each array element represents a digit. You need to find the sum of these two numbers and return this sum in the form of an array.

// Note:

// 1. The length of each array is greater than zero.

// 2. The first index of each array is the most significant digit of the number. For example, if the array A[] = {4, 5, 1}, then the integer represented by this array is 451 and array B[] = {3, 4, 5} so the sum will be 451 + 345 = 796. So you need to return {7, 9, 6}.

// 3. Both numbers do not have any leading zeros in them. And subsequently, the sum should not contain any leading zeros.

// Approach :
// run loop from end of A, then add A[i]+ B[i], then if >10 then add +1 in next iteration keep a flag for this
// then return new array with above elements

// function reverseArray(arr) {
//   const n = arr.length
//   for (let i = 0; i < n / 2; i++) {
//     ;[arr[i], arr[n - 1 - i]] = [arr[n - 1 - i], arr[i]]
//   }

//   return arr
// }

// function getSum(A, B) {
//   let addOne = false
//   const sum = []
//   for (let i = A.length - 1; i >= 0; i--) {
//     const elementA = A[i] ?? 0
//     const elementB = B[i] ?? 0

//     let summation = elementA + elementB
//     if (addOne) {
//       summation = summation + 1
//     }
//     addOne = false
//     if (summation > 9) {
//       addOne = true
//       summation = summation - 10
//     }
//     sum.push(summation)
//   }

//   return reverseArray(sum)
// }
// const A = [4, 5, 1]
// const B = [3, 4, 5]

// console.log('res:', getSum(A, B))

// function twoSumHashing(arr, target) {
//   let set = new Set()

//   for (let i = 0; i < arr.length; i++) {
//     let complement = target - arr[i]
//     console.log('complement: ', complement)

//     if (set.has(complement)) {
//       console.log('set: ', set)

//       return [arr[i], complement]
//     }

//     set.add(arr[i])
//   }

//   console.log('No pair found')
//   return null
// }

// let arr = [2, 7, 11, 15]
// let target = 9
// twoSumHashing(arr, target)

function closestPairSum(arr) {
  let n = arr.length

  let res = Infinity
  let x
  let left, right, mid, curr
  for (let i = 0; i < n; i++) {
    x = arr[i]
    left = i + 1
    right = n - 1

    while (left <= right) {
      mid = Math.floor((left + right) / 2)

      curr = arr[mid] + x

      // If exact pair is found
      if (curr === 0) {
        return 0
      }

      // Update res if the current pair is closer
      if (Math.abs(curr) < Math.abs(res)) {
        res = curr
      }

      // If current is smaller than 0,
      // go to right side. Else on the
      // left side.
      if (curr < 0) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }

  return { sum: res, index1: curr, index2: x }
}

const arr = [-10, -3, 0, 5, 9, 20]
const res = closestPairSum(arr)
console.log(`The closest sum to 0 is `, res)

function closestPairIndices2(arr) {
  let n = arr.length

  let closestSum = Infinity
  let closestIndices = [-1, -1]

  for (let i = 0; i < n; i++) {
    let x = arr[i]

    let left = i + 1,
      right = n - 1

    while (left <= right) {
      let mid = Math.floor((left + right) / 2)

      let currSum = arr[mid] + x

      // Update closest sum and indices if a closer sum is found
      if (Math.abs(currSum) < Math.abs(closestSum)) {
        closestSum = currSum
        closestIndices = [i, mid]
      } else if (Math.abs(currSum) === Math.abs(closestSum)) {
        // If the current pair has the same absolute value but greater sum, update indices
        if (currSum > closestSum) {
          closestIndices = [i, mid]
        }
      }

      // Move the pointers based on the sum
      if (currSum < 0) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }

  return closestIndices
}

// Example usage
// const arr = [-10, -3, 0, 5, 9, 20];
// const indices = closestPairIndices(arr)
// console.log(`The indices of the closest sum to 0 are: ${indices}`)

// Example usage
// const arr = [1, 60, -10, 70, -80, 85];
const indices2 = closestPairIndices2(arr)
console.log(`The indices of the closest sum to 0 are --- : ${indices2}`)

// function closestSum3(arr) {
//   let x,
//     left,
//     right,
//     mid,
//     curr,
//     closestIndeces = [],
//     res
//   const n = arr.length
//   for (let i = 0; i < n; i++) {
//     x = arr[i]
//     curr = arr[i + 1] + x
//     while (left < right) {
//       mid = Math.floor(left + right / 2)
//       if (Math.abs(curr) === 0) {
//         res = curr
//         closestIndeces = [i, mid]
//       }
//     }
//   }
// }
