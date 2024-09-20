function findElements(arr, k) {
  const n = arr.length;
  const threshold = Math.floor(n / k);
  const frequencyMap = {};
  const result = [];

  for (const num of arr) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  }

  for (const [num, count] of Object.entries(frequencyMap)) {
    if (count > threshold) {
      result.push(parseInt(num));
    }
  }

  return result;
}

console.log(findElements([3, 1, 2, 2, 1, 2, 3, 3], 4)); // Output: [2, 3]
console.log(findElements([9, 8, 7, 9, 2, 9, 7], 3)); // Output: [9]

function findElements2(arr, k) {
  const n = arr.length;
  const threshold = Math.floor(n / k);
  const frequencyMap = new Map();
  const result = [];

  for (let i = 0; i < n; i++) {
    if (frequencyMap.has(arr[i])) {
      frequencyMap.set(arr[i], frequencyMap.get(arr[i]) + 1);
    } else {
      frequencyMap.set(arr[i], 1);
    }
  }
  console.log("frequencyMap: ", frequencyMap);
}

console.log(findElements2([3, 1, 2, 2, 1, 2, 3, 3], 4)); // Output: [2, 3]
console.log(findElements2([9, 8, 7, 9, 2, 9, 7], 3)); // Output: [9]

function findElements3(arr, k) {
  const n = arr.length;
  const threshold = Math.floor(n / k);
  const frequencyMap = {};
  const result = [];

  // Count frequencies
  for (let i = 0; i < n; i++) {
    if (frequencyMap[arr[i]]) {
      frequencyMap[arr[i]] = frequencyMap[arr[i]] + 1;
    } else {
      frequencyMap[arr[i]] = 1;
    }
  }
  console.log("frequencyMap3: ", frequencyMap);

  for (const key in frequencyMap) {
    if (frequencyMap[key] > threshold) {
      result.push(parseInt(key));
    }
  }
  return result;
}

console.log("findElements3:", findElements3([3, 1, 2, 2, 1, 2, 3, 3], 4)); // Output: [2, 3]
console.log("findElements3:", findElements3([9, 8, 7, 9, 2, 9, 7], 3)); // Output: [9]
