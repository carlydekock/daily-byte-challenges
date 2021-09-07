//Intersection of Numbers
//Given two integer arrays, return their intersection.
//Note: the intersection is the set of elements that are common to both arrays.
//Ex: nums1 = [2, 4, 4, 2], nums2 = [2, 4], return [2, 4]
//Ex: nums1 = [1, 2, 3, 3], nums2 = [3, 3], return [3]
//Ex: nums1 = [2, 4, 6, 8], nums2 = [1, 3, 5, 7], return []


function intersectionNums(nums1, nums2){
  let nums1Map = new Map();
  let intersection = [];

  for(let i = 0; i < nums1.length; i++){
    let currentNum = nums1[i];
    nums1Map.set(currentNum, 1);
  }

  for(let j = 0; j < nums2.length; j++){
    let currentNum = nums2[j];
    if(nums1Map.has(currentNum)){
      intersection.push(currentNum);
      nums1Map.delete(currentNum);
    }
  }

  return intersection;
}

console.log(intersectionNums([2, 4, 4, 2], [2,4]));
console.log(intersectionNums([1, 2, 3, 3], [3,3]));
console.log(intersectionNums([2, 4, 6, 8], [1, 3, 5, 7]));