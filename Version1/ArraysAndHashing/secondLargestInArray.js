// Find the second largest element in array
// input : [12, 35, 15, 17, 31] -> output : 31
// input : [10, 5, 10] -> output : 5

const secondSmallestElement = (nums) => {
  let least = nums[1],
    secondLeast = nums[0];

  if (nums[0] < nums[1]) {
    least = nums[0];
    secondLeast = nums[1];
  }
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] < least) {
      least = nums[i];
      secondLeast = least;
    } else if (nums[i] < secondLeast) {
      secondLeast = nums[i];
    }
  }
  return [least, secondLeast];
};

console.log(secondSmallestElement([12, 35, 15, 17, 31]));

const secondLargestElement = (nums) => {
  if (nums.length < 2) {
    return null;
  }
  let largest = nums[0],
    secondLargest = nums[1];

  if (nums[0] < nums[1]) {
    largest = nums[1];
    secondLargest = nums[0];
  }
  if (nums.length > 2) {
    for (let i = 2; i < nums.length; i++) {
      if (nums[i] > largest) {
        largest = nums[i];
        secondLargest = largest;
      } else if (nums[i] > secondLargest && nums[i] !== largest) {
        secondLargest = nums[i];
      }
    }
  }
  return [largest, secondLargest];
};

console.log(secondLargestElement([12, 35, 15, 17, 31]));
console.log(secondLargestElement([10, 5, 10]));

// Time complexity : O(n)
// Space complexity : O(1)
