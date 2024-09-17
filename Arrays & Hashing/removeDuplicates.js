// Input : [1, 1, 2]   -> output : 2, [1,2,_]
// Input : [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]   -> output : 5, [0,1,2,3,4,_,_,_,_]

function removeDuplicate(nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
      i--;
    }
  }

  return nums.length;
}
// console.log(removeDuplicate());

// two pointer method
function removeDuplicateWithoutJSFunctions(
  nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
) {
  // nums[1]=nums[2]
  if (nums.length === 0) {
    return 0;
  }

  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      nums[i + 1] = nums[j];
      i++;
    }
  }
  console.log(nums);
  return i + 1;
}
console.log(removeDuplicateWithoutJSFunctions());
