//Lowest Common Ancestor
//Given a binary search tree that contains unique values and two nodes within the tree, a, and b, return their lowest common ancestor.
//Note: the lowest common ancestor of two nodes is the deepest node within the tree such that both nodes are descendants of it.
//Note: Since unique values, don't need to specify the case of equal to, can just check for > or <

function Tree(){
  this.root = null;
}

function TreeNode(val, left, right){
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

function lowestCommonAncestor(root, p, q){
  if(p.val < root.val && q.val < root.val){ //need to move to left subtree
    return lowestCommonAncestor(root.left, p, q);
  } else if(p.val > root.val && q.val > root.val){ //need to move to right subtree
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
}

let tree = new Tree();
tree.root = new TreeNode(7);
tree.root.left = new TreeNode(2);
tree.root.left.left = new TreeNode(1);
tree.root.left.right = new TreeNode(5);
tree.root.right = new TreeNode(9);

console.log(lowestCommonAncestor(tree.root, tree.root.left.left, tree.root.left.right));