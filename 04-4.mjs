// check if a binary tree is balanced (left and right are not different by more than 1)

import {
  createBSTFromArray,
  printBinaryTree,
  createRandomBinaryTreeFromArray,
} from "./binary-tree-helpers.mjs";

const sample1 = createBSTFromArray([
  1, 2, 3, 4, 5, 6, 2, 32, 25, 22, 66, 38, 42, 38,
]);

const sample2 = createRandomBinaryTreeFromArray([
  9, 32, 42, 51, 1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 54, 6, 3, 72,
]);

// based on size, not height
// const getTreeSize = (node) => {
//   if (node == null) {
//     return 0;
//   }
//   return 1 + getTreeSize(node.left) - getTreeSize(node.right);
// };
// const isBinaryTreeBalanced = (node) => {
//   return Math.abs(getTreeSize(node.left) - getTreeSize(node.right)) <= 1;
// };

const checkTreeHeights = (node) => {
  if (node == null) {
    return 0;
  }
  const leftHeight = checkTreeHeights(node.left);
  const rightHeight = checkTreeHeights(node.right);
  if (Math.abs(leftHeight - rightHeight) > 1) {
    throw new Error("tree not balanced");
  }
  return 1 + Math.max(leftHeight, rightHeight);
};

const isTreeBalanced = (root) => {
  let result = true;
  try {
    checkTreeHeights(root);
  } catch (e) {
    result = false;
  }
  return result;
};
printBinaryTree(sample1);
console.log(isTreeBalanced(sample1));
printBinaryTree(sample2);
console.log(isTreeBalanced(sample2));
