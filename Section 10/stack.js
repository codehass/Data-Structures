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

  push(value) {
    const newNode = new Node(value);
    if(!this.top ) {
      this.top = newNode;
    }else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }
}

let newStack = new Stack(7);
newStack.push(4)
newStack.push(2)