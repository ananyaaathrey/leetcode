function insertSorted(arr, n, key, capacity) {
  if (n >= capacity) return n;

  var i;
  for (i = n - 1; i >= 0 && arr[i] > key; i--) arr[i + 1] = arr[i];

  arr[i + 1] = key;

  return n + 1;
}
