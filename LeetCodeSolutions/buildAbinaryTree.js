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

  traverse() {
    if (this.root === null) {
      return null;
    } else {
      const result = [];
      const dfs = (node) => {
        node.left && dfs(node.left);
        node.right && dfs(node.right);
        result.push(node.value);
      };
      dfs(this.root);
      return result;
    }
  }

  add(value) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(value);
      return;
    } else {
      const searchTree = (node) => {
        if (value < node.value) {
          if (node.left === null) {
            node.left = new Node(value);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (value > node.value) {
          if (node.right === null) {
            node.right = new Node(value);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }
}

const b = new BST();
b.add(8);
b.add(7);
b.add(10);
b.add(5);
b.add(4);
b.add(14);
console.log(b);


console.log(b.traverse());
