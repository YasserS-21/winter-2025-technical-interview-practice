/**
 * Implement a Stack class with the following methods:
 * - push(item): Adds an item to the top of the stack.
 * - pop(): Removes and returns the top item. If the stack is empty, return null.
 * - peek(): Returns the top item without removing it. If the stack is empty, return null.
 * - isEmpty(): Returns true if the stack is empty, false otherwise.
 */
 class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items[this.items.length] = item
    }
  
    pop() {
      if (this.isEmpty()) return null
      return this.items.splice(-1,1)[0]
    }
  
    peek() {
      if (this.isEmpty()) return null
      return this.items[this.items.length-1] 
    }
  
    isEmpty() {
      return !this.items.length
    }
  }
  
  module.exports = Stack;
  