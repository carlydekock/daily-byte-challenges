//Sorted Array to BST
//Given an array of numbers sorted in ascending order, return a height-balanced binary search tree using every number from the array.
//Note: height-balanced meaning that the level of any node’s two subtrees should not differ by more than one.

//List is an inOrder traversal
//Middle of the list is the root
//Mid of the left is root.left, mid of right is root.right
//Recursively until we've done all the nodes, if left <= right

function Tree(){
  this.root = null;
}

function TreeNode(val, left, right){
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

function sortedArrayToBST(nums){
  if(nums === null || nums.length === 0){
    return null;
  }

  return buildTree(0, nums.length-1, nums);
}

function buildTree(left, right, nums){
  if(left <= right){
    const tree = new Tree();
    const mid = parseInt(left + (right - left) / 2);
    tree.root = new TreeNode(nums[mid]);
    tree.root.left = buildTree(left, mid-1, nums);
    tree.root.right = buildTree(mid+1, right, nums);

    return tree.root;
  }
  return null;
}

console.log(sortedArrayToBST([1,2,3,4,5,6]));