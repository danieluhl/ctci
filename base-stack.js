class Stack {
  _stack = [];
  push(item) {
    this._stack.push(item);
  }
  pop() {
    return this._stack.pop();
  }
  isEmpty() {
    return this._stack.length === 0;
  }
  peek() {
    return this._stack.at(this._stack.length - 1);
  }
}
