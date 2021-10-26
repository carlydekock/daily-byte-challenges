//Sum Left Leaves
//Given a binary tree, return the sum of all left leaves of the tree. 

function Tree(){
  this.root = null;
}

function TreeNode(val, left, right){
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

function sumLeftLeaves(root){
  if(root === null || !root){
    return 0;
  } else if(root.left !== null && root.left.left === null && root.left.right === null){
    return root.left.val + sumLeftLeaves(root.right);
  } else {
    return sumLeftLeaves(root.left) + sumLeftLeaves(root.right);
  }
}

const tree = new Tree();
tree.root = new TreeNode(5);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(12);
tree.root.right.left = new TreeNode(3);
tree.root.right.right = new TreeNode(8);

const tree2 = new Tree();
tree2.root = new TreeNode(2);
tree2.root.left = new TreeNode(4);
tree2.root.right = new TreeNode(2);
tree2.root.left.left = new TreeNode(3);
tree2.root.left.right = new TreeNode(9);

console.log(sumLeftLeaves(tree.root));
console.log(sumLeftLeaves(tree2.root));