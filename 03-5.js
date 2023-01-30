// keep stack sorted, you can only use one other temp stack

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

class SortedStack {
  _s1 = new Stack();
  _s2 = new Stack();
  push(item) {
    let smallTop = this._s1.peek();
    let largeTop = this._s2.peek();
    if (largeTop == null || item >= largeTop) {
      while (largeTop != null && item > largeTop) {
        this._s1.push(this._s2.pop());
        largeTop = this._s2.peek();
      }
      this._s2.push(item);
    } else if (smallTop == null || item <= smallTop) {
      while (smallTop != null && item < smallTop) {
        this._s2.push(this._s1.pop());
        smallTop = this._s1.peek();
      }
      this._s1.push(item);
    }
  }

  _transfer() {
    while (!this._s1.isEmpty()) {
      this._s2.push(this._s1.pop());
    }
  }

  pop() {
    this._transfer();
    return this._s2.pop();
  }

  isEmpty() {
    return this._s2.isEmpty() && this._s1.isEmpty();
  }

  peek() {
    this._transfer();
    return this._s2.peek();
  }

  print() {
    console.log("small");
    console.log(this._s1);
    console.log("large");
    console.log(this._s2);
  }
}

const sortedStack = new SortedStack();
sortedStack.push(4);
sortedStack.push(3);
sortedStack.push(2);
sortedStack.push(1);
sortedStack.push(2);
sortedStack.push(5);
sortedStack.push(1);
sortedStack.print();
sortedStack.peek();
sortedStack.print();
console.log(sortedStack.pop());
sortedStack.print();
