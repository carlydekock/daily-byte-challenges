//Same Leaves
//Given two binary trees, return whether or not both trees have the same leaf sequence. Two trees have the same leaf sequence if both trees’ leaves read the same from left to right.

function Tree(){
  this.root = null;
}

function TreeNode(val, left, right){
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

function collectLeaves(root, leaves){
  if(root !== null){
    if(root.left === null && root.right === null){
      leaves.push(root.val);
    }

    collectLeaves(root.left, leaves);
    collectLeaves(root.right, leaves);
  }
}

function sameLeaves(root1, root2){
  const root1Leaves = [];
  collectLeaves(root1, root1Leaves);

  const root2Leaves = [];
  collectLeaves(root2, root2Leaves);

  if(root1Leaves.length === root2Leaves.length){
    for(let i = 0; i < root1Leaves.length; i++){
      if(root1Leaves[i] !== root2Leaves[i]){
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

const tree = new Tree();
tree.root = new TreeNode(1);
tree.root.left = new TreeNode(1);
tree.root.right = new TreeNode(3);

const tree2 = new Tree();
tree2.root = new TreeNode(7);
tree2.root.left = new TreeNode(1);
tree2.root.right = new TreeNode(2);

const tree3 = new Tree();
tree3.root = new TreeNode(8);
tree3.root.left = new TreeNode(2);
tree3.root.right = new TreeNode(29);
tree3.root.right.left = new TreeNode(3);
tree3.root.right.right = new TreeNode(9);

const tree4 = new Tree();
tree4.root = new TreeNode(8);
tree4.root.left = new TreeNode(2);
tree4.root.right = new TreeNode(29);
tree4.root.left.left = new TreeNode(2);
tree4.root.right.left = new TreeNode(3);
tree4.root.right.right = new TreeNode(9);
tree4.root.right.left.right = new TreeNode(3);

console.log(sameLeaves(tree.root, tree2.root));
console.log(sameLeaves(tree3.root, tree4.root));
