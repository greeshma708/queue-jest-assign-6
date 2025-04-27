// tests/Queue.test.js
const Queue = require('../src/Queue');

describe('Queue Operations', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('Constructor initializes empty queue', () => {
    expect(queue.length()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
  });

  test('enqueue adds element', () => {
    queue.enqueue(1);
    expect(queue.length()).toBe(1);
    expect(queue.peek()).toBe(1);
  });

  test('dequeue removes element', () => {
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(2);
    expect(queue.length()).toBe(0);
  });

  test('peek returns first element', () => {
    queue.enqueue(3);
    queue.enqueue(4);
    expect(queue.peek()).toBe(3);
  });

  test('length returns correct size', () => {
    queue.enqueue(5);
    queue.enqueue(6);
    expect(queue.length()).toBe(2);
  });

  test('isEmpty returns true or false', () => {
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(7);
    expect(queue.isEmpty()).toBe(false);
  });

  test('removeAll clears the queue', () => {
    queue.enqueue(8);
    queue.enqueue(9);
    queue.removeAll();
    expect(queue.length()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
  });

  // ✅ This is the new test for Task 2 (should fail)
  //test('dequeue throws error when queue is empty', () => {
   // expect(() => queue.dequeue()).toThrow("Queue is empty");
  //});

});


