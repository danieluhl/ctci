import {
  createBSTFromSortedArray,
  createRandomBinaryTreeFromArray,
} from './binary-tree-helpers.mjs';

function printBinaryTree(tree) {
  const levels = treeToLevelArrays(tree);
  // const spacing = 2 ** (height - level) * 3;
  const max = levels.length;
  levels.forEach((level, i) => {
    const spacing = 2 ** (max - i) * 3;
    let row = `${' '.repeat(spacing / 2)}`;
    level.forEach((node) => {
      row = `${row}${node.value.toString().padStart(3, '_')}${' '.repeat(
        spacing
      )}`;
    });
    console.log(row);
  });
}

function treeToLevelArrays(node, level = 0, result = []) {
  if (node == null) {
    return result;
  }
  result[level] ??= [];
  result = treeToLevelArrays(node.left, level + 1, result);
  result[level].push(node);
  result = treeToLevelArrays(node.right, level + 1, result);
  return result;
}

const sample1 = createBSTFromSortedArray([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 32, 93,
]);

const sample2 = createRandomBinaryTreeFromArray([
  9, 32, 42, 51, 1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 54, 6, 3, 72,
]);

printBinaryTree(sample1);
printBinaryTree(sample2);
// export { printBinaryTree };
