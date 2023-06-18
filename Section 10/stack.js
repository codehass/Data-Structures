//LIFO Last in first out

// 1. Implement Stack using linked list
// shift o(n) and unshift o(1) 
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode; 
    this.length = 1;
  }
}