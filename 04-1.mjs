// in-order = left, node, right
// pre-order = node, left, right
// post-order = left, right, node
// min-heap = bindary tree where each node is smaller than it's children
//  insert, getMin
// Trie = tree where each path (root to leaf) is sorted (and may represent a word)
// Adjency matrix = matrix of booleans where true means row is adjacent to column
// DFS recursive can be simpler and is usually used when visiting all nodes
// BFS iterative is better for finding a path between nodes
import { directedGraph1, directedGraph2 } from "./directed-graph.mjs";

// is there a route between a and b
const hasRoute = (a, b, graph) => {
  // BFS on a and b at the same time
  let queueA = [];
  let queueB = [];
  queueA.push(graph[a - 1]);
  queueB.push(graph[b - 1]);
  while (queueA.length > 0 || queueB.length > 0) {
    const adjacentsA = queueA.pop() ?? [];
    const adjacentsB = queueB.pop() ?? [];
    if (adjacentsA.includes(b)) {
      return true;
    }
    if (adjacentsB.includes(a)) {
      return true;
    }
    adjacentsA.forEach((next) => {
      queueA.push(graph[next - 1]);
    });
    adjacentsB.forEach((next) => {
      queueB.push(graph[next - 1]);
    });
  }
  return false;
};
console.log(hasRoute(3, 4, directedGraph1)); // true
console.log(hasRoute(1, 3, directedGraph2)); // false
