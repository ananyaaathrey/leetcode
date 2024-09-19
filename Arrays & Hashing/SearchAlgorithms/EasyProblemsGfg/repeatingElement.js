function firstRepeatingElement(arr) {
  const map = new Map();

  for (const element of arr) {
    if (map.has(element)) {
      return element;
    } else {
      map.set(element, 1);
    }
  }
  return -1;
}

const arr = [4, 5, 6, 7, 5, 8, 9];
console.log(firstRepeatingElement(arr)); // Output: 5
