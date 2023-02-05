// example
// Projects: [a, b, c, d, e, f]
// dependencies: (a, d), (f, b), (b, d), (f, a), (d, c)
// output: f, e, a, b, d, c

// d -> a, b
// b -> f
// a -> f
// c -> d

/*

{
  a: Node(a, [f])
  d: Node(d, [a, b])
  ...
}
iterate through keys trying to use the key as root
if found, done
if not, none
notes: loop detection would be a good shortcut


{
  a: [f],
  b: [f],
  c: [d],
  d: [a, b],
  e: [],
  f: [],
}

// if no deps, they go first
// next find entrypoint (may not exist)
// next walk the tree depth first

*/

const sample1 = {
  projects: ["a", "b", "c", "d", "e", "f"],
  deps: [
    ["a", "d"],
    ["f", "b"],
    ["b", "d"],
    ["f", "a"],
    ["d", "c"],
  ],
};
const sample2 = {
  projects: ["a", "b", "c", "d", "e", "f"],
  deps: [
    ["a", "d"],
    ["d", "a"],
    ["b", "d"],
    ["f", "a"],
    ["d", "c"],
  ],
};

function buildDeps({ projects, deps }) {
  // build the hash
  const nodesMap = projects.reduce((hashMap, key) => {
    return hashMap.set(key, new Set());
  }, new Map());
  deps.forEach(([to, from]) => {
    nodesMap.get(from).add(to);
  });
  // remove anything with no deps
  // remove the removed from any lists

  let prevSize = -1;
  const buildOrder = [];
  while (nodesMap.size !== prevSize) {
    prevSize = nodesMap.size;
    nodesMap.forEach((deps, key) => {
      if (deps.size === 0) {
        nodesMap.delete(key);
        buildOrder.push(key);
        nodesMap.forEach((deps, _) => {
          deps.delete(key);
        });
      }
    });
  }
  if (buildOrder.length < projects.length) {
    console.error(`Circular Dependency: ${[...nodesMap.keys()]}`);
    throw new Error("no build order possible");
  }
  return buildOrder;
}

console.log(buildDeps(sample1));
console.log(buildDeps(sample2));
