//Root to Leaf Path Sum
//Given a binary tree and a target, return whether or not there exists a root to leaf path such that all values along the path sum to the target.

function Tree(){
  this.root = null;
}

function TreeNode(val, left, right){
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

function pathSum(root, target){
  if(!root || root === null || root.val > target){
    return false;
  }

  return hasPathSum(root, target, 0);
}

function hasPathSum(root, target, sum){
  if(root === null){
    return false;
  } else if(root.left === null && root.right === null && sum + root.val === target){
    return true;
  } else {
    return hasPathSum(root.left, target, sum + root.val) || hasPathSum(root.right, target, sum + root.val);
  }
}

function pathSumIterative(root, target){
  if(!root || root === null){
    return false;
  }

  const nodes = [root];
  const values = [root.val];

  while(nodes.length > 0){
    const current = nodes.shift();
    const sumValue = values.shift();
    if(current.left === null && current.right === null && sumValue === target){
      return true;
    }
    if(current.left !== null){
      nodes.push(current.left);
      values.push(sumValue + current.left.val);
    }
    if(current.right !== null){
      nodes.push(current.right);
      values.push(sumValue + current.right.val);
    }
  }
  return false;
}

const tree = new Tree();
tree.root = new TreeNode(1);
tree.root.left = new TreeNode(5);
tree.root.right = new TreeNode(2);
tree.root.left.left = new TreeNode(1);
tree.root.right.left = new TreeNode(12);
tree.root.right.right = new TreeNode(29);

console.log(pathSumIterative(tree.root, 15));