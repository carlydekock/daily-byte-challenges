//Visible Values
//Given a binary tree return all the values you’d be able to see if you were standing on the left side of it with values ordered from top to bottom.

function Tree(){
  this.root = null;
}

function TreeNode(val, left, right){
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

function visibleValues(root){
  const values = [];
  if(!root || root === null){
    return values;
  }

  const q = [root];
  while(q.length > 0){
    const size = q.length;
    for(let i = 0; i < size; i++){
      const node = q.shift();
      if(i === 0){
        values.push(node.val);
      }
      if(node.left){
        q.push(node.left);
      }
      if(node.right){
        q.push(node.right);
      }
    }
  }
  return values;
}

let tree = new Tree();
tree.root = new TreeNode(7);
tree.root.left = new TreeNode(4);
tree.root.right = new TreeNode(9);
tree.root.left.left = new TreeNode(1);
tree.root.left.right = new TreeNode(4);
tree.root.right.left = new TreeNode(8);
tree.root.right.right = new TreeNode(9);
tree.root.right.right.right = new TreeNode(9);

console.log(visibleValues(tree.root));