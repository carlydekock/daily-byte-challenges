//Gather N-ary Tree Levels
//Given an n-ary tree, return its level order traversal.
//Note: an n-ary tree is a tree in which each node has no more than N children.

function karyTree(k) {
  this.root = null;
  this.k = k;
}

function karyNode(val, size){
  this.val = val;
  this.children = new Array(size);
}

function traverse(root){
  const levels = [];
  if(!root || root === null){
    return levels;
  }
  const q = [root];
  while(q.length > 0){
    const size = q.length;
    const currentLevel = [];
    for(let i = 0; i < size; i++){
      const current = q.shift();
      currentLevel.push(current.val);
      for(let i = 0; i < current.children.length; i++){
        if(current.children[i]){
          q.push(current.children[i]);
        }
      }
    }
    levels.push(currentLevel);
  }
  return levels;
}

const tree = new karyTree(3);
tree.root = new karyNode(8, tree.k);
tree.root.children[0] = new karyNode(2, tree.k);
tree.root.children[1] = new karyNode(3, tree.k);
tree.root.children[2] = new karyNode(29, tree.k);

const tree2 = new karyTree(3);
tree2.root = new karyNode(2, tree2.k);
tree2.root.children[0] = new karyNode(1, tree2.k);
tree2.root.children[1] = new karyNode(6, tree2.k);
tree2.root.children[2] = new karyNode(9, tree2.k);
tree2.root.children[0].children[0] = new karyNode(8, tree2.k);
tree2.root.children[1].children[0] = new karyNode(2, tree2.k);
tree2.root.children[2].children[0] = new karyNode(2, tree2.k);
tree2.root.children[1].children[0].children[0] = new karyNode(19, tree2.k);
tree2.root.children[1].children[0].children[1] = new karyNode(12, tree2.k);
tree2.root.children[1].children[0].children[2] = new karyNode(90, tree2.k);

console.log(traverse(tree2.root));