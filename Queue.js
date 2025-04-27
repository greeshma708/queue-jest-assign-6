// src/Queue.js
class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      return this.items.shift(); // ❌ Bug: Does not throw error if empty
    }
  
    peek() {
      return this.items[0];
    }
  
    length() {
      return this.items.length;
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    removeAll() {
      this.items = [];
    }
  }
  
  module.exports = Queue;
  