//Gather Levels
//Given a binary tree, return its level order traversal where the nodes in each level are ordered from left to right.

//Breadth-first search pseudocode
//Add starting point to queue
//Continue processing while queue is not empty
//Remove item from queue
//Process current item (print values for example)
//Add all neighbors of current item to the queue
//Go to 2

function Tree(){
  this.root = null;
}

function TreeNode(val, left, right){
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

function gatherLevels(root){
  const levels = [];
  if(!root || root === null){
    return levels;
  }

  const q = [root];
  while(q.length > 0){
    const size = q.length;
    const currentLevel = [];
    for(let i = 0; i < size; i++){
      const node = q.shift();
      currentLevel.push(node.val);
      if(node.left){
        q.push(node.left);
      }
      if(node.right){
        q.push(node.right);
      }
    }
    levels.push(currentLevel);
  }
  return levels;
}


let tree = new Tree();
tree.root = new TreeNode(2);
tree.root.left = new TreeNode(10);
tree.root.right = new TreeNode(15);
tree.root.right.right = new TreeNode(20);

console.log(gatherLevels(tree.root));