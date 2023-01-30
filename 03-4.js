// implement a stack using only two queues

class Queue {
  _queue = [];
  push(item) {
    this._queue.push(item);
  }
  pop() {
    return this._queue.shift();
  }
  isEmpty() {
    return this._queue.length === 0;
  }
  peek() {
    return this._queue.at(0);
  }
}

class Stack {
  _q1 = new Queue();
  _q2 = new Queue();
  push(item) {
    this._q1.push(item);
  }
  _transfer() {
    while (!this._q1.isEmpty()) {
      this._q2.push(this._q1.pop());
    }
  }
  pop() {
    this._transfer();
    return this._q2.pop();
  }
  isEmpty() {
    return this._q1.isEmpty() && this._q2.isEmpty();
  }
  peek() {
    this._transfer();
    return this._q2.peek();
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
