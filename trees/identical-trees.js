//Identical Trees
//Given two binary trees, return whether or not the two trees are identical. Note: identical meaning they exhibit the same structure and the same values at each node.

function Tree(){
  this.root = null;
}

function TreeNode(val, left, right){
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

function sameTree(tree1, tree2){
  if(tree1 === null && tree2 === null){
    return true;
  }

  if(tree1 !== null && tree2 !== null){
    return (tree1.val === tree2.val && sameTree(tree1.left, tree2.left) && sameTree(tree1.right, tree2.right));
  }

  return false;
}

const treeA = new Tree();
treeA.root = new TreeNode(2);
treeA.root.left = new TreeNode(1);
treeA.root.right = new TreeNode(3);

const treeB = new Tree();
treeB.root = new TreeNode(2);
treeB.root.left = new TreeNode(1);
treeB.root.right = new TreeNode(4);

console.log(sameTree(treeA.root, treeB.root));
