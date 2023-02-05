// find if one tree is a subtree of another tree

import {
  createBSTFromSortedArray,
  // printBinaryTree,
} from "./binary-tree-helpers.mjs";

const sample1 = createBSTFromSortedArray([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
]);
const find1 = createBSTFromSortedArray([10, 12, 14]);
const find2 = createBSTFromSortedArray([19, 12, 14]);
const find3 = createBSTFromSortedArray([10, 12, 15]);

function isSubtree(node, findRoot) {
  if (node == null) {
    return false;
  }
  if (node.value === findRoot.value) {
    const found = isMatch(node, findRoot);
    if (found) {
      return found;
    }
  }
  return isSubtree(node.left, findRoot) || isSubtree(node.right, findRoot);
}

function isMatch(r1, r2) {
  if (r2 == null) {
    return true;
  }
  if (r1 == null || r1.value !== r2.value) {
    return false;
  }
  return isMatch(r1.left, r2.left) && isMatch(r1.right, r2.right);
}

console.log(isSubtree(sample1, find1)); // true
console.log(isSubtree(sample1, find2)); // false
console.log(isSubtree(sample1, find3)); // false
