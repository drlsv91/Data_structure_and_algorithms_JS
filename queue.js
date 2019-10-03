/*
QUEUE
Abstract data type
FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.
DO NOT use an array and the native enqueue/shift method in your implementation. Use an object as the underlying data structure.
*** Operations:
myQueue.enqueue(value)
=> count of queue
add value to collection
myQueue.dequeue()
=> oldest element added collection
Remove item so that it is no longer in collection
myQueue.peek()
=> oldest element added collection
Similiar to dequeue, but do not remove element from collection
myQueue.count()
=> number of elements in queue
*** Exercises:
Modify your queue to take a max capacity and return a string if you try to add an element when there's no more room:
myQueue.enqueue(value)
=> "Max capacity already reached. Remove element before adding a new one."
Create a contains method to check if a value is in the queue:
myQueue.contains('findme')
=> true/false
What's the time complexity?
Create an until method to get the number of dequeues until you get to a certain value:
queue values - (first)2-5-7-3-6-9(last)
myQueue.until(7)
=> 3
What's the time complexity?
Implement a queue using two stacks (include enqueue, dequeue, peek, and count).
*/

function Queue(capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._head = 0;
  this._tail = 0;
}

Queue.prototype.enqueue = function(value) {
  if (this.count() < this._capacity) {
    this._storage[this._tail++] = value;
    return this._count;
  }
  return "Max capacity is reached remove element before adding new one";
};
Queue.prototype.dequeue = function() {
  var value = this._storage[this._head];
  delete this._storage[this._head];
  if (this._head < this._tail) this._head++;
  return value;
};
Queue.prototype.peek = function() {
  return this._storage[this._head];
};
Queue.prototype.count = function() {
  return this._tail - this._head;
};
Queue.prototype.contains = function(value) {
  for (let i = this._head; i < this._tail; i++) {
    if (this._storage[i] === value) return true;
  }
  return false;
};
Queue.prototype.untill = function(value) {
  for (let i = this._head; i < this._tail; i++) {
    if (this._storage[i] === value) return i - this._head + 1;
  }
  return null;
};
var queue = new Queue();
queue.enqueue(2);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(9);
// console.log(queue);
// console.log(queue.untill(7));

function Stack(capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._count = 0;
}

Stack.prototype.push = function(value) {
  if (this._count < this._capacity) {
    this._storage[this._count++] = value;
    return this._count;
  }
  return "Max capacity is already reached remove element before adding new one";
};

Stack.prototype.pop = function() {
  var value = this._storage[--this._count];
  delete this._storage[this._count];
  if (this._count < 0) {
    this._count = 0;
  }
  return value;
};
Stack.prototype.peek = function() {
  return this._storage[this._count - 1];
};
Stack.prototype.count = function() {
  return this._count;
};

function Queue_TwoStacks() {
  this._stackIn = new Stack();
  this._stackOut = new Stack();
}
Queue_TwoStacks.prototype.enqueue = function(value) {
  this._stackIn.push(value);
};
//to dequeue we need to transverse the list to get the oldest element
Queue_TwoStacks.prototype.transverse = function() {
  while (this._stackIn.count() > 0) {
    this._stackOut.push(this._stackIn.pop());
  }
};
Queue_TwoStacks.prototype.pop = function() {
  if (this._stackOut.count() === 0) this.transverse();
  return this._stackOut.pop();
};

Queue_TwoStacks.prototype.count = function() {
  return this._stackIn.count() + this._stackOut.count();
};
Queue_TwoStacks.prototype.peek = function() {
  if (this._stackOut.count() === 0) this.transverse();
  return this._stackOut.peek();
};
var qts = new Queue_TwoStacks();
qts.enqueue("A");
qts.enqueue("B");
qts.enqueue("C");
