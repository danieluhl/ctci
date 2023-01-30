class SetOfStacks {
  stacks = [[]];
  lastStackIndex = 0;
  maxPerStack = 2;
  push(item) {
    if (this.stacks[this.lastStackIndex].length >= this.maxPerStack) {
      this.lastStackIndex++;
      this.stacks[this.lastStackIndex] = [];
    }
    this.stacks[this.lastStackIndex].push(item);
  }
  pop() {
    const item = this.stacks[this.lastStackIndex].pop();
    if (this.stacks[this.lastStackIndex].length === 0) {
      delete this.stacks[this.lastStackIndex];
      this.lastStackIndex--;
    }
    return item;
  }
  popAt(stack) {
    let stackIndex = stack - 1;
    if (
      this.stacks[stackIndex] == null ||
      this.stacks[stackIndex].length === 0
    ) {
      return null;
    }
    if (stackIndex === this.LastStackIndex) {
      return this.pop();
    }

    // we know we're popping from a full stack
    const item = this.stacks[stackIndex].pop();
    while (stackIndex < this.lastStackIndex) {
      this.stacks[stackIndex].push(this.stacks[stackIndex + 1].shift());
      stackIndex++;
    }
    return item;
  }
  print() {
    console.log(this.stacks);
  }
}

const myStacks = new SetOfStacks();
myStacks.push(1);
myStacks.push(2);
myStacks.push(3);
myStacks.push(4);
myStacks.push(5);
myStacks.push(6);
myStacks.print();
console.log(myStacks.popAt(1));
myStacks.print();
// console.log(myStacks.pop());
// console.log(myStacks.pop());
// console.log(myStacks.pop());
// console.log(myStacks.pop());
