// sentinal linear search

function sentinalLinearSearch(arr, key) {
  const last = arr[arr.length - 1];
  if (last === key) {
    return arr.length - 1;
  }

  arr[arr.length - 1] = key;
  let i = 0;
  while (arr[i] !== key) {
    i++;
  }

  if (i < arr.length - 1) {
    return i;
  } else {
    return "Not found";
  }
}
console.log("Search result :", sentinalLinearSearch([1, 2, 3, 4, 5], 4));
console.log("Search result :", sentinalLinearSearch([1, 2, 3, 4, 5], 6));
