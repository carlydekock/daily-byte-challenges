//Two Sum
//Given an array of integers, return whether or not two numbers sum to a given target, k.
//Note: you may not sum a number with itself.
//Ex: [1, 3, 8, 2], k = 10, return true (8 + 2)
//Ex: [3, 9, 13, 7], k = 8, return false

function twoSum(nums, target){
  let index = new Map();

  for(let i = 0; i < nums.length; i++){
    let currentNum = nums[i];
    let currentDifference = target - nums[i];

    if(index.has(currentDifference)){
      return true;
    } else {
      index.set(currentNum, i);
    }
  }
  return false;
}

console.log(twoSum([1, 3, 8, 2], 10));
console.log(twoSum([3, 9, 13, 7], 8));
console.log(twoSum([4, 2, 6, 5, 2], 4));
