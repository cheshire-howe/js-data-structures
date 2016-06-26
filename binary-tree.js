class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  show() {
    return this.data;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let n = new Node(data, null, null);
    if (this.root == null) {
      this.root = n;
    }
    else {
      let current = this.root;
      let parent;
      while (true) {
        parent = current;
        if (data < current.data) {
          // why can't I do this?
          // if (current.left == null) {
          //   current.left = n;
          //   break;
          // }
          current = current.left;
          if (current == null) {
            parent.left = n;
            break;
          }
        }
        else {
          current = current.right;
          if (current == null) {
            parent.right = n;
            break;
          }
        }
      }
    }
  }

  inOrder(node) {
    if (!(node == null)) {
      this.inOrder(node.left);
      console.log(node.show() + " ");
      this.inOrder(node.right);
    }
  }

  preOrder(node) {
    if (!(node == null)) {
      console.log(node.show() + " ");
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  postOrder(node) {
    if (!(node == null)) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.show() + " ");
    }
  }

  getMin() {
    let current = this.root;
    while (!(current.left == null)) {
      current = current.left;
    }
    return current.data;
  }

  getMax() {
    let current = this.root;
    while (!(current.right == null)) {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    let current = this.root;
    while (current.data != data) {
      if (data < current.data) {
        current = current.left;
      }
      else {
        current = current.right;
      }

      if (current == null) {
        return null;
      }
    }
    return current;
  }

  getSmallest(node) {
    if (node.left == null) {
      return node;
    }
    else {
      return this.getSmallest(node.left);
    }
  }

  remove(data) {
    let root = this.removeNode(this.root, data);
  }

  removeNode(node, data) {
    if (node == null) {
      return null;
    }

    if (data == node.data) {
      // node has no children
      if (node.left == null && node.right == null) {
        return null;
      }

      // node has no left child
      if (node.left == null) {
        return node.right;
      }

      // node has no right child
      if (node.right == null) {
        return node.left;
      }

      // node has two children
      let tempNode = this.getSmallest(node.right);
      node.data = tempNode.data;
      node.right = this.removeNode(node.right, tempNode.data);
      return node;
    }
    else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    }
    else {
      node.right = this.removeNode(node.right, data);
      return node;
    }
  }
}

module.exports = BST;

