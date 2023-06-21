// Full tree is a binary tree where each node has 0 or 2 children
// Perfect binary tree is a binary tree where each node has 2 children and all leaf nodes are at the same level
// Complete binary tree is a binary tree where each level is filled except the last level. The last level is filled from left to right

// leaf nodes are nodes with no children

//Binary Search Tree

//BST Big O
//O(log n)  searching is average case and best case scenario. Worst case is O(n) if the tree is one sided.
/*
  - lookup O(log n)
  - insert O(log n)
  - delete O(log n)
*/

//Comparing BST to linked list
/* 
  - linked List                        - BST
        v         -insert()
                  -lookup()             v
                  -remove()             v
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  //Insert method
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (temp.value === newNode.value) return undefined;
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  // Contains method
  contains(value) {
    if (this.root === null) return false;
    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }

  //Minimum value
  minValueNode(currentNode) {
    while (currentNode.left != null) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }
}
