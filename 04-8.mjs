// find first common ancestor
// assume not doubly linked
// input: two nodes, and root
// output: common ancestor or null if not found

/*

build parent list for 1
build parent list for 2
find first common parent

*/

import {
  createBSTFromSortedArray,
  printBinaryTree,
} from "./binary-tree-helpers.mjs";

const tree1 = createBSTFromSortedArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const tree2 = createBSTFromSortedArray([10, 11, 12, 13, 14]);
printBinaryTree(tree1);
const node1 = tree1;
const node2 = tree2.left;

const getParentList = (node, searchNode, parents = []) => {
  if (node == null) {
    return null;
  }
  if (node.value === searchNode.value) {
    parents.push(node.value);
    return parents;
  }
  const left = getParentList(node.left, searchNode, parents);
  const right = getParentList(node.right, searchNode, parents);

  if (left != null || right != null) {
    parents.push(node.value);
    return parents;
  }
  return null;
};

function findCommonAncestor(node1, node2, tree) {
  // what if they are a parent/child relationship?
  const parents1 = getParentList(tree, node1);
  const parents2 = getParentList(tree, node2);
  if (parents1 == null || parents2 == null) {
    return "none found";
  }
  console.log({ parents1, parents2 });
  const firstSame = parents1.find((val) => parents2.includes(val));
  if (firstSame < 0) {
    return "none found";
  }
  return firstSame;
}

console.log(findCommonAncestor(node1, node2, tree1));
