//Root to Leaf Paths
//Given a binary tree, return a list of strings containing all root to leaf paths.

function Tree(){
  this.root = null;
}

function TreeNode(val, left, right){
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

function paths(root){
  const paths = [];
  if(!root || root === null){
    return paths;
  }
  
  generatePaths(root, paths, '');
  return paths;
}

function generatePaths(root, paths, current){
  if(root.left === null && root.right === null){
    current += root.val;
    paths.push(current);
    return;
  }

  if(root.left !== null){
    generatePaths(root.left, paths, current + root.val + '->');
  }

  if(root.right !== null){
    generatePaths(root.right, paths, current + root.val + '->');
  }
}

const tree = new Tree();
tree.root = new TreeNode(1);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(3);

const tree2 = new Tree();
tree2.root = new TreeNode(8);
tree2.root.left = new TreeNode(2);
tree2.root.right = new TreeNode(29);
tree2.root.right.left = new TreeNode(3);
tree2.root.right.right = new TreeNode(9);

console.log(paths(tree2.root));