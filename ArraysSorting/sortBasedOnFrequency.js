let arr = [2, 5, 2, 6, -1, 9999999, 5, 8, 8, 8]

function compare(a, b, mapCount, mapIndex) {
  let countA = mapCount.get(a)
  let countB = mapCount.get(b)

  if (countA !== countB) {
    return countB - countA
  } else {
    return mapIndex.get(a) - mapIndex.get(b)
  }
}

function quickSort(arr, mapCount, mapIndex) {
  if (arr.length < 2) {
    return arr
  }

  let pivot = arr[arr.length - 1]
  let left = []
  let right = []

  for (let i = 0; i < arr.length - 1; i++) {
    if (compare(arr[i], pivot, mapCount, mapIndex) < 0) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return [
    ...quickSort(left, mapCount, mapIndex),
    pivot,
    ...quickSort(right, mapCount, mapIndex),
  ]
}

function sortBasedOnFrequencyAndValue(list) {
  const mapIndex = new Map()
  const mapCount = new Map()

  for (let i = 0; i < list.length; i++) {
    if (mapCount.has(list[i])) {
      mapCount.set(list[i], mapCount.get(list[i]) + 1)
    } else {
      mapCount.set(list[i], 1)
      mapIndex.set(list[i], i)
    }
  }

  console.log('mapCount: ', mapCount)
  console.log('mapIndex: ', mapIndex)

  return quickSort(list, mapCount, mapIndex)
}

let sortedArray = sortBasedOnFrequencyAndValue(arr)
console.log('Sorted Array: ', sortedArray)

// function sortBasedOnFrequencyAndValue(list) {
//   const mapIndex = new Map()
//   const mapCount = new Map()

//   for (let i = 0; i < list.length; i++) {
//     if (mapCount.has(list[i])) {
//       mapCount.set(list[i], mapCount.get(list[i]) + 1)
//     } else {
//       mapCount.set(list[i], 1)
//       mapIndex.set(list[i], i)
//     }
//   }
//   console.log("mapCount: ", mapCount)
//   console.log("mapIndex: ", mapIndex)

//   //   list.sort(function (n1, n2) {
//   //     let freq1 = mapCount.get(n1)
//   //     let freq2 = mapCount.get(n2)
//   //     if (freq1 != freq2) {
//   //       return freq2 - freq1
//   //     } else {
//   //       return mapIndex.get(n1) - mapIndex.get(n2) // sort based on first occurence of index
//   //     }
//   //   })
//   //   return list
// }

// console.log("sorted by frequency : ", sortBasedOnFrequencyAndValue(arr))
