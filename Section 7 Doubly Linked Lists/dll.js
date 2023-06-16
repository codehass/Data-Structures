//the difference between singly and doubly linked lists is that doubly linked lists have a pointer to the previous node as well as the next node.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

// Double linked list
class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  // push method
  push(value) {
    const newNode = new Node(value)
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }
}

//Example
const myDoublyLinkedList = new DoublyLinkedList(7);
myDoublyLinkedList