// check if a tree is balanced (no more than 1 off from each side)
const { balanced, unbalanced } = require('./binary-trees');

const isBalanced = (tree) => {
  return Math.abs(count(tree.left) - count(tree.right)) <= 1;
};
const count = (node) => {
  if (node == null) {
    return 0;
  }
  return 1 + count(node.left) + count(node.right);
};

console.log(isBalanced(balanced)); // true
console.log(isBalanced(unbalanced)); // false
