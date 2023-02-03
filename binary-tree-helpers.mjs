// given a sorted array, create a minimal binary search tree

class Node {
  value = null;
  right = null;
  left = null;
  constructor(value) {
    this.value = value;
  }
}
const createRandomBinaryTreeFromArray = (arr, node, root) => {
  if (arr.length === 0) {
    return null;
  }
  const next = new Node(arr.pop());
  if (node == null) {
    return createRandomBinaryTreeFromArray(arr, next, next);
  }
  const lrb = Math.floor(Math.random() * 6);
  if (lrb === 0) {
    next.left = createRandomBinaryTreeFromArray(arr, next);
  } else if (lrb === 1) {
    next.right = createRandomBinaryTreeFromArray(arr, next);
  } else {
    const halfIndext = Math.floor(arr.length / 2);
    const firstHalf = arr.slice(0, halfIndext);
    const secondHalf = arr.slice(halfIndext, arr.length);
    next.left = createRandomBinaryTreeFromArray(firstHalf, next);
    next.right = createRandomBinaryTreeFromArray(secondHalf, next);
  }
  return next;
};

const createBSTFromSortedArray = (sortedArr, parent = null) => {
  if (sortedArr.length === 0) {
    return null;
  } else if (sortedArr.length === 1) {
    const next = new Node(sortedArr[0]);
    next.parent = parent;
    return next;
  }
  const middle = Math.floor(sortedArr.length / 2);
  const left = sortedArr.slice(0, middle);
  const right = sortedArr.slice(middle + 1, sortedArr.length);
  const root = new Node(sortedArr[middle]);
  if (left && left.length > 0) {
    root.left = createBSTFromSortedArray(left, root);
  }
  if (right && right.length > 0) {
    root.right = createBSTFromSortedArray(right, root);
  }
  root.parent = parent;
  return root;
};
// console.log(getBinaryTree([1, 3, 12, 18, 54, 383]));
// console.log(getBinaryTree([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(getBinaryTree([1, 2, 3, 4, 5, 6, 7, 8]));

const printBinaryTree = (node) => {
  const queue = [];
  queue.push({ ...node, level: 0, parent: "-" });
  const results = [];
  while (queue.length > 0) {
    const cur = queue.shift();
    const curLevel = cur.level;
    results[curLevel] ??= [];
    results[curLevel].push(`${cur.parent}:${cur.value}`);
    if (cur.left) {
      queue.push({ ...cur.left, level: curLevel + 1, parent: cur.value });
    }
    if (cur.right) {
      queue.push({ ...cur.right, level: curLevel + 1, parent: cur.value });
    }
  }
  results.forEach((level, i) => {
    const spaces = 2 ** (results.length - 1 - i) / 2;
    console.log(
      `${" ".repeat(spaces)}${level.join(" ".repeat(Math.max(spaces * 2, 1)))}`
    );
  });
};

export {
  createBSTFromSortedArray,
  printBinaryTree,
  createRandomBinaryTreeFromArray,
};
