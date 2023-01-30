// Three stacks with one array
// push, pop, peek, isEmpty

class Stacks {
  _stacks = [];
  _tops = [0, 1, 2];
  push(item, stack) {
    const stackIndex = stack - 1;
    const currentIndex = this._tops[stackIndex];
    this._stacks[currentIndex] = item;

    const nextIndex = currentIndex + 3;
    this._tops[stackIndex] = nextIndex;
  }
  // allow for passing tops for print
  pop(stack) {
    const index = this._tops[stack - 1];
    let nextIndex = index;
    if (index > 2) {
      nextIndex = index - 3;
    }
    const value = this._stacks[nextIndex];
    if (value != null) {
      this._tops[stack - 1] = nextIndex;
      delete this._stacks[nextIndex];
    }
    // note value might be null or undefined
    return value;
  }
  peek(stack) {
    return this._stacks[this._tops[stack - 1] - 3];
  }
  isEmpty(stack) {
    return this._stacks[this._tops[stack - 1] - 3] == null;
  }
  print() {
    let [t1, t2, t3] = [...this._tops];
    console.log('Queue 1: ');
    while (t1 >= 0) {
      console.log(this._stacks[t1]);
      t1 -= 3;
    }

    console.log('Queue 2: ');
    while (t2 >= 1) {
      console.log(this._stacks[t2]);
      t2 -= 3;
    }

    console.log('Queue 3: ');
    while (t3 >= 2) {
      console.log(this._stacks[t3]);
      t3 -= 3;
    }
  }
}

const myStacks = new Stacks();
myStacks.push(4, 1);
myStacks.push(5, 1);
myStacks.push(6, 1);
myStacks.push(7, 1);
myStacks.pop(1);
myStacks.pop(1);
myStacks.pop(1);
myStacks.pop(1);
console.log(myStacks.isEmpty(1));

myStacks.push(6, 2);
myStacks.push(7, 2);
myStacks.push(8, 2);
myStacks.push(9, 2);

myStacks.push(5, 3);
myStacks.push(6, 3);
myStacks.push(7, 3);
myStacks.push(8, 3);
myStacks.print();
