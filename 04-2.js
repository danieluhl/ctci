// given a sorted array, create a minimal binary search tree

class Node {
  value = null;
  right = null;
  left = null;
  constructor(value) {
    this.value = value;
  }
}
const getBinaryTree = (sortedArr) => {
  if (sortedArr.length === 0) {
    return null;
  } else if (sortedArr.length === 1) {
    return new Node(sortedArr[0]);
  }
  const middle = Math.floor(sortedArr.length / 2);
  const left = sortedArr.slice(0, middle);
  const right = sortedArr.slice(middle + 1, sortedArr.length);
  const root = new Node(sortedArr[middle]);
  if (left && left.length > 0) {
    root.left = getBinaryTree(left);
  }
  if (right && right.length > 0) {
    root.right = getBinaryTree(right);
  }
  return root;
};
// console.log(getBinaryTree([1, 3, 12, 18, 54, 383]));
// console.log(getBinaryTree([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(getBinaryTree([1, 2, 3, 4, 5, 6, 7, 8]));

export { getBinaryTree };
