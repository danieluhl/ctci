// check if a binary tree is a BST (left always smaller than right)

import {
  createBSTFromArray,
  printBinaryTree,
  createRandomBinaryTreeFromArray,
} from "./binary-tree-helpers.mjs";

const sample1 = createBSTFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 32, 93]);

const sample2 = createRandomBinaryTreeFromArray([
  9, 32, 42, 51, 1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 54, 6, 3, 72,
]);

function isBST(root) {
  if (root == null) {
    return true;
  }
  if (root.left && root.left.value > root.value) {
    return false;
  }
  if (root.right && root.right.value < root.value) {
    return false;
  }
  return isBST(root.right) && isBST(root.left);
}

printBinaryTree(sample1);
console.log(isBST(sample1));
printBinaryTree(sample2);
console.log(isBST(sample2));
