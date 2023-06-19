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

  dequeue() {
    if(this.length === 0) return undefined;
    let temp = this.first;
    if(this.length === 1) {
      this.first = null;
      this.last = null;
    }else {
      this.first = this.first.next;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
}

//Example:
const myQueue = new Queue(7);
myQueue.enqueue(10);
myQueue.enqueue(7);
myQueue.dequeue();