//FIFO first in first out

// If we use arrays to queue and dequeue it will be o(n)
//If we use linked list to queue and dequeue it will be o(1)

// 2. Implement Queue using linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  } 

  enqueue(value) {
    const newNode = new Node(value);
    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    }else {
      this.last.next = newNode;
      this.last = newNode; 
    }
    this.length++;
    return this;
  }
}