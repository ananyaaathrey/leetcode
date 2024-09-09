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
console.log(removeDuplicate())

