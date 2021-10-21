//Calculate Depth
//Given a binary tree, return its maximum depth.
//Note: the maximum depth is defined as the number of nodes along the longest path from root node to leaf node.

function Tree(){
  this.root = null;
}

function TreeNode(val, left, right){
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

function calculateDepth(root){
  if(root === null){
    return 0;
  }

  const left = calculateDepth(root.left);
  const right = calculateDepth(root.right);
  return Math.max(left, right) + 1;
}

const tree = new Tree();
tree.root = new TreeNode(9);
tree.root.left = new TreeNode(1);
tree.root.right = new TreeNode(2);

const tree2 = new Tree();
tree2.root = new TreeNode(5);
tree2.root.left = new TreeNode(1);
tree2.root.right = new TreeNode(29);
tree2.root.right.left = new TreeNode(4);
tree2.root.right.right = new TreeNode(13);

console.log(calculateDepth(tree.root));
console.log(calculateDepth(tree2.root));