// stack with additional property: min

class Stack {
  _stack = [];
  _min = null;
  push(value) {
    if (!this._min) {
      this._min = value;
    }
    this._stack.push({ min: this._min, value });
    this._min = Math.min(this._min, value);
  }
  pop() {
    const { min, value } = this._stack.pop();
    this._min = min;
    return value;
  }
  min() {
    return this._min;
  }
}

const myStack = new Stack();
myStack.push(3);
myStack.push(2);
myStack.push(1);
myStack.push(2);
console.log(myStack.min()); // 1
myStack.pop();
myStack.pop();
console.log(myStack.min()); // 2
myStack.pop();
console.log(myStack.min()); // 3
