//Convert Binary Search Tree to Sorted Linked List
//Given a binary search tree, rearrange the tree such that it forms a linked list where all its values are in ascending order.
//Ex- Input: [5,1,6], Output: 1 -> 5-> 6

function Tree(){
  this.root = null;
}

function TreeNode(val, left, right){
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

function traverseInOrder(root) {
  const nodes = [];
  let current = root;
  const traverse = (node) => {
    if(node.left) traverse(node.left);
    nodes.push(node.val);
    if(node.right) traverse(node.right);
  };
  traverse(current);
  return nodes;
}

function convertToSortedList(root){
  const values = traverseInOrder(root);
  const result = new Tree();
  result.root = new TreeNode(values[0]);
  let current = result;
  for(let i = 1; i < values.length; i++){
    current.right = new TreeNode(values[i]);
    current = current.right;
  }
  return result;
}

let tree = new Tree();
tree.root = new TreeNode(4);
tree.root.left = new TreeNode(2);
tree.root.left.left = new TreeNode(1);
tree.root.left.right = new TreeNode(3);
tree.root.right = new TreeNode(7);

console.log(convertToSortedList(tree.root));