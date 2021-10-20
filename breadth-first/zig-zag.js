//Zigzag Traversal
//Given a binary tree, return its zig-zag level order traversal (i.e. its level order traversal from left to right the first level, right to left the level the second, etc.).

function Tree(){
  this.root = null;
}

function TreeNode(val, left, right){
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

function zigZag(root){
  const levels = [];
  if(!root || root === null){
    return levels;
  }

  let count = 0;
  const q = [root];
  while(q.length > 0){
    const currentLevel = [];
    const size = q.length;
    for(let i = 0; i < size; i++){
      const node = q.shift();
      //If even -> left to right
      if(count % 2 === 0){
        currentLevel.push(node.val);
        if(node.left){
          q.push(node.left);
        }
        if(node.right){
          q.push(node.right);
        }
      //If odd -> right to left
      } else {
        currentLevel.unshift(node.val);
        if(node.left){
          q.push(node.left);
        }
        if(node.right){
          q.push(node.right);
        }
      }
    }
    count++;
    levels.push(currentLevel);
  }
  return levels;
}

let tree = new Tree();
tree.root = new TreeNode(8);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(29);
tree.root.right.left = new TreeNode(3);
tree.root.right.right = new TreeNode(9);

console.log(zigZag(tree.root));