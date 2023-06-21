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
}
