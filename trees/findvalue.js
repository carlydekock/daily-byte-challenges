//Find Value
//Given the reference to the root of a binary search tree and a search value, return the reference to the node that contains the value if it exists and null otherwise.
//Note: all values in the binary search tree will be unique.
function Tree(){
  this.root = null;
}

function TreeNode(val, left, right){
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

function searchBST(root, val){
  if(root === null){
    return null;
  } else if(root.val === val){
    return root;
  } else if(val < root.val){
    return searchBST(root.left, val);
  } else if(val > root.val){
    return searchBST(root.right, val);
  }
}

//Iterative
function iterativeSearchBST(root,val){
  if(root === null){
    return null;
  }
  const stack = [root];
  while(stack.length){
    const node = stack.pop();
    if(node.val === val){
      return node;
    }
    if(node.val > val){
      if(node.left){
        stack.push(node.left);
      }
    } else {
      if(node.right){
        stack.push(node.right);
      }
    }
  }
  return null;
}

let tree = new Tree();
tree.root = new TreeNode(4);
tree.root.left = new TreeNode(2);
tree.root.left.left = new TreeNode(1);
tree.root.left.right = new TreeNode(3);
tree.root.right = new TreeNode(7);
console.log(searchBST(tree.root, 3));

