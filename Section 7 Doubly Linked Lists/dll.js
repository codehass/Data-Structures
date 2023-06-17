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

    this.length++;
    return this;
  }

  //pop method
  pop() {
    if (!this.head) return undefined;
    let temp = this.tail;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    }else {
      this.tail = temp.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }

  //unshift method
  unshift(value) {
    const newNode = new Node(value);
    if(this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //shift method
  shift() {
    if(this.length === 0) return undefined;
    let temp = this.head;
    if(this.length === 1 ) {
      this.head = null;
      this.tail = null;
    }else {
      this.head = this.head.next ;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  //get method
  get(index) {
    if(index < 0 || index >= this.length) return undefined;
    let temp = this.head
    if(index<this.length/2) {
      for(let i=0; i<index; i++) {
        temp = temp.next
      }
    }else {
      temp = this.tail;
      for(let i=this.length - 1; i>index; i--) {
        temp = temp.prev;
      }
    }
    return temp
  }
}

//Example
const myDoublyLinkedList = new DoublyLinkedList(7);
myDoublyLinkedList.push(10);
myDoublyLinkedList.pop();
myDoublyLinkedList.unshift(4);
myDoublyLinkedList.shift();
myDoublyLinkedList.get(1);