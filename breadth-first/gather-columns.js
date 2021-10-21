//Gather Columns
//Given a binary tree, return its column order traversal from top to bottom and left to right. Note: if two nodes are in the same row and column, order them from left to right.

function Tree(){
  this.root = null;
}

function TreeNode(val, left, right){
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

function gatherColumns(root){
  const results = [];
  if(!root || root === null){
    return results;
  }

  const map = new Map();
  const q = [root];
  const columns = [0];
  let min = 0;
  let max = 0;
  while(q.length > 0){
    const current = q.shift();
    const column = columns.shift();
    if(!map.has(column)){
      map.set(column, []);
    }
    const result = map.get(column);
    result.push(current.val);

    if(current.left !== null){
      q.push(current.left);
      columns.push(column - 1);
      min = Math.min(min, column-1);
    }

    if(current.right !== null){
      q.push(current.right);
      columns.push(column + 1);
      max = Math.max(max, column + 1);
    }
  }
  
  for(let i = min; i <= max; i++){
    results.push(map.get(i));
  }
  return results;
}

const tree = new Tree();
tree.root = new TreeNode(8);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(29);
tree.root.right.left = new TreeNode(3);
tree.root.right.right = new TreeNode(9);

const tree2 = new Tree();
tree2.root = new TreeNode(100);
tree2.root.left = new TreeNode(53);
tree2.root.right = new TreeNode(78);
tree2.root.left.left = new TreeNode(32);
tree2.root.left.right = new TreeNode(3);
tree2.root.right.left = new TreeNode(9);
tree2.root.right.right = new TreeNode(20);

console.log(gatherColumns(tree2.root));