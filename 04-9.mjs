// get all possible insertion orders for a tree
/*

BFS going right first, then left first - recurse for each node

*/

import {
  createBSTFromSortedArray,
  printBinaryTree,
} from "./binary-tree-helpers.mjs";

const tree1 = createBSTFromSortedArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const tree2 = createBSTFromSortedArray([10, 11, 12, 13, 14]);
printBinaryTree(tree1);
printBinaryTree(tree2);

function interleaveSets(set1, set2, prefix) { }

function getAllIterations(root, solutions = []) {
  solutions.push([root]);
}
