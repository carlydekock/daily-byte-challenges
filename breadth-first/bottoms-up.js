//Bottoms Up
//Given a binary tree, returns of all its levels in a bottom-up fashion (i.e. last level towards the root).

//Do a normal breadth first seach
//Add each level to a stack
//Pop off the stack and into results array to reverse the order

function Tree(){
  this.root = null;
}

function TreeNode(val, left, right){
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

function bottomUp(root){
  const levels = [];
  if(!root || root === null){
    return levels;
  }

  const q = [root];
  const stack = [];
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
    stack.push(currentLevel);
  }

  const numOfLevels = stack.length; //can't use stack.length since we are popping off the stack, will change the number of iterations for the loop
  for(let i = 0; i < numOfLevels; i++){
    const level = stack.pop();
    levels.push(level);
  }
  return levels;
}

let tree = new Tree();
tree.root = new TreeNode(7);
tree.root.left = new TreeNode(6);
tree.root.right = new TreeNode(2);
tree.root.left.left = new TreeNode(3);
tree.root.left.right = new TreeNode(3);

console.log(bottomUp(tree.root));
