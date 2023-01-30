// can get from 4 to 3
// 1 -> 2
// 2 -> 3
// 3
// 4 -> 3
const directedGraph1 = [[2], [3], [], [3]];

// can't get from 1 to 3
const directedGraph2 = [[2], [4], [2], []];

export { directedGraph1, directedGraph2 };
