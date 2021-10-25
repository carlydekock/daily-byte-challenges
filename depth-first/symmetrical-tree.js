//Symmetrical Tree
//Given a binary tree, return whether or not it forms a reflection across its center (i.e. a line drawn straight down starting from the root).
//Note: a reflection is when an image, flipped across a specified line, forms the same image.

function Tree(){
  this.root = null;
}

function TreeNode(val, left, right){
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

function isSymmetric(left, right){
  if(left === null || right === null){
    return left === right;
  }
  if(left.val !== right.val){
    return false;
  }
  return isSymmetric(left.left, right.right) && isSymmetric(left.right, right.left);
}

function isTreeSymmetric(root){
  if(!root || root === null){
    return true;
  } 

  return isSymmetric(root.left, root.right);
}

const tree = new Tree();
tree.root = new TreeNode(2);
tree.root.left = new TreeNode(1);
tree.root.right = new TreeNode(1);

const tree2 = new Tree();
tree2.root = new TreeNode(1);
tree2.root.left = new TreeNode(5);
tree2.root.right = new TreeNode(5);
tree2.root.left.right = new TreeNode(7);
tree2.root.right.right = new TreeNode(7);

console.log(isTreeSymmetric(tree.root));
console.log(isTreeSymmetric(tree2.root));