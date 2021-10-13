//Find the Mode
//Given a binary search tree, return its mode (you may assume the answer is unique). If the tree is empty, return -1. Note: the mode is the most frequently occurring value in the tree.

//Traverse tree inOrder
//Iterate through the array to record instances of each value

function Tree() {
  this.root = null;
}

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

function inOrder(root) {
  const nodes = [];
  let current = root;

  const traverse = (node) => {
    if (node.left) traverse(node.left);
    nodes.push(node.val);
    if (node.right) traverse(node.right);
  };
  traverse(current);
  return nodes;
}

function findMode(root){
  if(!root || root === null){
    return -1;
  }

  const nodes = inOrder(root);
  const count = {};

  for(let i = 0; i < nodes.length; i++){
    const currentNum = nodes[i];
    count[currentNum] ? count[currentNum]++ : count[currentNum] = 1;
  }

  let mode;
  let max = 1;
  for(let key in count){
    if(count[key] > max){
      max = Math.max(max, count[key]);
      mode = key;
    }
  }
  return mode;
}

const tree1 = new Tree();
tree1.root = new TreeNode(2);
tree1.root.left = new TreeNode(1);
tree1.root.right = new TreeNode(2);

const tree2 = new Tree();
tree2.root = new TreeNode(7);
tree2.root.left = new TreeNode(4);
tree2.root.right = new TreeNode(9);
tree2.root.left.left = new TreeNode(1);
tree2.root.left.right = new TreeNode(4);
tree2.root.right.left = new TreeNode(8);
tree2.root.right.right = new TreeNode(9);
tree2.root.right.right.right = new TreeNode(9);

console.log(findMode(tree1.root));
console.log(findMode(tree2.root));

