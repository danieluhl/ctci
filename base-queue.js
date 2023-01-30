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
