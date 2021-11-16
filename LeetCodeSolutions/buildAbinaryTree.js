class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor(root = new Node(null)) {
    this.root = root;
  }

  insert(value) {
    let currNode = this.root;
    while (currNode) {
      if (value < currNode.value) {
        if (currNode.left === null) {
          currNode.left = new Node(value);
          currNode = null;
        } else {
          currNode = currNode.left;
        }
      } else if (value > currNode.value) {
        if (currNode.right === null) {
          currNode.right = new Node(value);
          currNode = null;
        } else {
          currNode = currNode.right;
        }
      } else {
        throw new Error("Value already in BST");
      }
    }
  }
}

const b = new BST();
b.insert(8);
b.insert(7);
b.insert(10);
b.insert(5);
b.insert(4);
b.insert(14);
console.log(JSON.stringify(b))

