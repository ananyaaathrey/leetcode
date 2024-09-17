// Example usage:
// const input = [1, 2, 3];
// Output: [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]

function generateSubsets(arr) {
  let subSet = [[]];
  for (element of arr) {
    const newSubSet = subSet.map((sub) => [...sub, element]);
    subSet = [...subSet, ...newSubSet];
  }

  return subSet;
}

const input = [1, 2, 3];
console.log(generateSubsets(input));

function generateSubsetsRecursion(arr) {
  if (arr.length === 1) {
    return [[]];
  }

  const newSubSet = subSet.map((sub) => [...sub, element]);
  subSet = [...subSet, ...newSubSet];

  return subSet;
}

console.log(generateSubsetsRecursion(input));
