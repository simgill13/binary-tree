function Tree() {
  this.root = null;
}

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

Tree.prototype.addNode = function(value) {
  let node = new Node(value);
  if (this.root == null) {
    this.root = node;
  } else {
    this.root.addNode(node);
  }
};

Node.prototype.addNode = function(n) {
  if (n.value < this.value) {
    if (this.left == null) {
      this.left = n;
    } else {
      this.left.addNode(n);
    }
  } else {
    if (this.right == null) {
      this.right = n;
    } else {
      this.right.addNode(n);
    }
  }
};

Node.prototype.visit = function() {
  if (this.left) {
    this.left.visit();
  }
  console.log(this.value);
  if (this.right) {
    this.right.visit();
  }
};

Tree.prototype.traverse = function() {
  this.root.visit();
};

let tree = new Tree();
for (let i = 0; i < 10; i++) {
  tree.addNode(Math.floor(Math.random() * 100) + 1);
}
tree.traverse();

console.log("final", tree);