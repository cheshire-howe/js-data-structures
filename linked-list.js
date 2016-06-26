/** Class representing a Node in a LinkedList. */
class Node {
  /**
   * Create a Node
   * @param {string|number} The value of the node 
   */
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

/** Class representing a LinkedList */
class LinkedList {
  /**
   * Create a LinkedList
   */
  constructor() {
    this.head = new Node("head");
  }

  /**
   * Find an element in the LinkedList
   * @param {string|numer} item - Item to find
   * @returns {string|number}
   */
  find(item) {
    let currNode = this.head;
    while (currNode.element != item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  insert(newElement, item) {
    let newNode = new Node(newElement);
    let current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
  }

  display() {
    let currNode = this.head;
    while (!(currNode.next == null)) {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }

  findPrevious(item) {
    let currNode = this.head;
    while (!(currNode.next == null) &&
        (currNode.next.element != item)) {
      currNode = currNode.next;
    }
    return currNode;
  }

  remove(item) {
    let prevNode = this.findPrevious(item);
    if (!(prevNode.next == null)) {
      prevNode.next = prevNode.next.next;
    }
  }
}

module.exports = LinkedList;

