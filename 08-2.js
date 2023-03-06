// robot in grid only goes right or down, find a way
//  to the bottom corner, some squares are off limits

const grid = [
  [0, 0, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 1, 0],
];

const findPath = (grid, x = 0, y = 0) => {
  const endY = grid.length - 1;
  const endX = grid[0].length - 1;
  if (x == endX && y == endY) {
    // win condition!
    return ['end'];
  }
  if (x > endX || y > endY || grid[x][y] === 1) {
    // bad path
    return false;
  }
  // can only go down
  const downPath = findPath(grid, x + 1, y);
  const rightPath = findPath(grid, x, y + 1);
  if (downPath) {
    return ['down', ...downPath];
  }
  if (rightPath) {
    return ['right', ...rightPath];
  }
};

// down, down, right, right, right, down
console.log(findPath(grid));
