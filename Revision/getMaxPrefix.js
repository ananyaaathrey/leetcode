function getCharAtIndex(word, index) {
  return [...word][index]
}

function getMaxPrefix(arr) {
  const result = []
  let str = arr[0]

  for (let i = 0; i < str.length; i++) {
    // 'g' -> str[0]
    let presentInAll = true
    for (let j = 1; j < arr.length; j++) {
      if (getCharAtIndex(arr[j], i) !== str[i]) {
        presentInAll = false
        break
      }
    }
    if (presentInAll) {
      result.push(str[i])
    } else {
      break
    }
  }
  return result
}

const arr = ['geeksforgeeks', 'geeks', 'geek', 'geezer']
// ['hello', 'world']
console.log('getMaxPrefix: ', getMaxPrefix(arr))
