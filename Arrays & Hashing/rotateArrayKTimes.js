// rotate the array elements by k times
// i/p : [1, 2, 3, 4, 5, 6, 7] , times=3 ; o/p : [5, 6, 7, 1, 2, 3, 4]

const rotateArrayKTimes = (nums = [1, 2, 3, 4, 5, 6, 7], k = 3) => {
  const slicedArray = nums.splice(nums.length - k, k);

  return [...slicedArray, ...nums];
};

console.log(rotateArrayKTimes());
