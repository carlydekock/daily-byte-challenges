//Validate Tree
//Given a binary tree, containing unique values, determine if it is a valid binary search tree.
//Note: the invariants of a binary search tree (in our case) are all values to the left of a given node are less than the current node’s value, all values to the right of a given node are greater than the current node’s value, and both the left and right subtrees of a given node must also be binary search trees.

function Tree(){
  this.root = null;
}

function TreeNode(val, left, right){
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

function validate(root, max, min){
  if(!root || root === null){
    return true;
  } else if(max !== null && root.val >= max || min !== null && root.val <= min){
    return false;
  } else {
    return validate(root.left, root.val, min) && validate(root.right, max, root.val);
  }
}

function isValid(root){
  return validate(root, null, null);
}

const tree = new Tree();
tree.root = new TreeNode(1);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(3);


const tree2 = new Tree();
tree2.root = new TreeNode(2);
tree2.root.left = new TreeNode(1);
tree2.root.right = new TreeNode(3);

console.log(isValid(tree.root));
console.log(isValid(tree2.root));