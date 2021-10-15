//Max Value in Each Level
//Given a binary tree, return the largest value in each of its levels. Ex: Given the following tree…

function Tree(){
  this.root = null;
}

function TreeNode(val, left, right){
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

function bfs(root){
  const maxValues = [];
  if(!root || root === null){
    return maxValues;
  }

  const q = [root];
  while(q.length > 0){
    const size = q.length;
    let max = 0;
    for(let i = 0; i < size; i++){
      const node = q.shift();
      if(node.val > max){
        max = Math.max(max, node.val);
      }
      if(node.left){
        q.push(node.left);
      }
      if(node.right){
        q.push(node.right);
      }
    }
    maxValues.push(max);
  }
  return maxValues;
}

let tree = new Tree();
tree.root = new TreeNode(2);
tree.root.left = new TreeNode(10);
tree.root.right = new TreeNode(15);
tree.root.right.right = new TreeNode(20);

let tree2 = new Tree();
tree2.root = new TreeNode(1);
tree2.root.left = new TreeNode(5);
tree2.root.right = new TreeNode(6);
tree2.root.left.left = new TreeNode(5);
tree2.root.left.right = new TreeNode(3);
tree2.root.right.right = new TreeNode(7);

console.log(bfs(tree.root));
console.log(bfs(tree2.root));