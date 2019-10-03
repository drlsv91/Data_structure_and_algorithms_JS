function Stacks(capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._count = 0;
}

Stacks.prototype.push = function(value) {
  if (this._count < this._capacity) {
    this._storage[this._count++] = value;
    return this._count;
  }
  return "Max capacity is already reached, remove element before adding new one";
};
Stacks.prototype.pop = function() {
  var curr = this._storage[--this._count];
  delete this._storage[this._count];
  return curr;
};
Stacks.prototype.peek = function() {
  return this._storage[this._count - 1];
};
Stacks.prototype.count = function() {
  return this._count;
};

var stack = new Stacks();

stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);

function MinStack(capacity) {
  this._capacity = capacity || Infinity;
  this._count = 0;
  this._storage = {};
  this._min = new Stacks();
}

MinStack.prototype.push = function(value) {
  if (this._count < this._capacity) {
    if (this._min.peek() < value) {
      this._min.push(this._min.peek());
    } else {
      this._min.push(value);
    }
  }
  this._storage[this._count++] = value;
  return this._count;
};

MinStack.prototype.pop = function() {
  this._min.pop();
  var value = this._storage[--this._count];
  delete this._storage[this.count];
  if (this._count < 0) {
    this._count = 0;
  }
  return value;
};
MinStack.prototype.peek = function() {
  return this._storage[this._count - 1];
};
MinStack.prototype.count = function() {
  return this._count;
};
MinStack.prototype.min = function() {
  return this._min.peek();
};
var min_stack = new MinStack();
min_stack.push(1);
min_stack.push(7);
min_stack.push(8);
min_stack.push(2);
min_stack.push(0);
