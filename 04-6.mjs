import {
  createBSTFromSortedArray,
  printBinaryTree,
} from "./binary-tree-helpers.mjs";

const sample1 = createBSTFromSortedArray([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 32, 45, 67,
]);
const node1 = sample1.right;
const node2 = sample1.right.right;
const node3 = sample1.left.left.left;

function getNextInOrderSuccessor(node) {
  let result;
  if (!node.right) {
    if (node.parent == null || node.parent.value < node.value) {
      return "No next available, this is the largest number";
    }
    return node.parent.value;
  }
  let next = node.right;
  while (next.left !== null) {
    next = next.left;
  }
  return next.value;
}

// printBinaryTree(sample1);
console.log(getNextInOrderSuccessor(node1)); // 45
console.log(getNextInOrderSuccessor(node2)); // "none"
console.log(getNextInOrderSuccessor(node3)); // 2
