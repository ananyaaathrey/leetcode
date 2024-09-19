// linear search

function linearSearch(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
  return "Not found";
}
console.log("Search result :", linearSearch([1, 2, 3, 4, 5], 4));
console.log("Search result :", linearSearch([1, 2, 3, 4, 5], 6));
