function findFirstRepeatingElement(arr) {
  const map = new Map()
  let least = Infinity
  for (let i = 0; i < arr.length; i++) {
    // console.log('map: ', map)
    // console.log('least: ', least)

    if (map.has(arr[i]) && map.get(arr[i]) < least) {
      least = map.get(arr[i]) // store index
    }
    map.set(arr[i], i)
  }
  return least === Infinity ? -1 : arr[least]
}
console.log(
  '----findFirstRepeatingElement: ',
  findFirstRepeatingElement([10, 5, 3, 4, 4, 3, 5, 6])
)

console.log(
  '----findFirstRepeatingElement: ',
  findFirstRepeatingElement([10, 5, 3, 4, 6])
)

function insertInSortedArray(arr, key) {
  let i
  for (i = arr.length - 1; i > 0 && arr[i] > key; i--) {
    arr[i + 1] = arr[i]
  }

  arr[i] = key
  return arr
}
const arrNew = [12, 16, 20, 40, 50, 70]
const key = 26
console.log('insertInSortedArray(arr, key): ', insertInSortedArray(arrNew, key))
