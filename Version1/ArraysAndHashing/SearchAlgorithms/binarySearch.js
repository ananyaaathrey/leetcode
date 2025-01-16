// Binary search is a search algorithm used to find the position of a target value within a sorted array.
// It works by repeatedly dividing the search interval in half until the target value is found or the interval is empty.
// The search interval is halved by comparing the target element with the middle value of the search space.

function binarySearch(nums, target) {
  let low = 0,
    mid,
    high = nums.length - 1;

  while (high >= low) {
    mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return "Not found";
}

console.log("index of target is :", binarySearch([1, 2, 3, 4], 2));

function binarySearchRecursion(l, h, nums, target) {
  let low = l,
    mid,
    high = h;

  while (high >= low) {
    mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] > target) {
      // high = mid - 1;
      return binarySearchRecursion(l, mid - 1, nums, target);
    } else {
      // low = mid + 1;
      return binarySearchRecursion(mid + 1, h, nums, target);
    }
  }
  return "Not found";
}

console.log(
  "index of target is :",
  binarySearchRecursion(0, 3, [1, 2, 3, 4], 2)
);
