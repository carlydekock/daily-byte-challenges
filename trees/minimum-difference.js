//Minimum Difference
//Given a binary search tree, return the minimum difference between any two nodes in the tree.

function inOrder(root){
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

function minDifference(root){
  const values = inOrder(root);

  let min = Number.MAX_SAFE_INTEGER;
  for(let i = 0; i < values.length - 1; i++){
    min = Math.min(min, values[i+1] - values[i]);
  }

  return min;
}