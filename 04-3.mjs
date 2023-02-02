// given a binary tree, return a linked list for each "row" of each depth of the tree

// recursive depth search approach passing depth and an array of linked lists to add to along the way

import { createBSTFromArray, printBinaryTree } from "./binary-tree-helpers.mjs";
import { printLinkedLists } from "./linked-list-helpers.mjs";

const sample1 = createBSTFromArray([
  1, 2, 3, 4, 5, 6, 2, 32, 25, 22, 66, 38, 42, 38,
]);

// printBinaryTree(sample1);
/*
32
38->4
38->22->6->2
42->66->25->2->5->3->1
*/

class LinkNode {
  value = null;
  next = null;
  constructor(value) {
    this.value = value;
  }
}

const getLinkedListsFromBinaryTree = (node, level = 0, lists = []) => {
  if (node == null) {
    return lists;
  }
  let head = lists[level];
  const nextLinkNode = new LinkNode(node.value);
  if (head == null) {
    lists[level] = nextLinkNode;
  } else {
    while (head.next != null) {
      head = head.next;
    }
    head.next = nextLinkNode;
  }

  getLinkedListsFromBinaryTree(node.left, level + 1, lists);
  getLinkedListsFromBinaryTree(node.right, level + 1, lists);
  return lists;
};

printLinkedLists(getLinkedListsFromBinaryTree(sample1));
