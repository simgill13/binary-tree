function Tree() {
  this.root = null;
};

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

Tree.prototype.addNode = function(value) {
  let node = new Node(value);
  if (this.root == null) {
    this.root = node;
  } else {
    this.root.addNode(node)
  }
};


Node.prototype.addNode = function(n) {
  if (n.value < this.value) {
    if (this.left == null) {
      this.left = n;
    } else {
      this.left.addNode(n);
    }
  }else{
    if (this.right == null) {
      this.right = n;
    } else {
      this.right.addNode(n);
    }
  }
};

let tree = new Tree();
tree.addNode(5);
tree.addNode(3);
tree.addNode(7);
tree.addNode(6);

console.log("final", tree);
