// your kid can do 1, 2, or 3 stairs at a time, given n stairs
//  how many different ways can they go up the stairs?

// for 1 stair - 1
// 2: 2
// 3: 4

const memo = {};
const getStairCombos = (stairsCount) => {
  // at step, check if I can take 1, 2, or 3 steps from here
  // if so, add one and recurse
  if (stairsCount < 0) {
    return 0;
  }
  if (stairsCount == 0) {
    return 1;
  }
  if (memo[stairsCount] == null) {
    memo[stairsCount] =
      getStairCombos(stairsCount - 1) +
      getStairCombos(stairsCount - 2) +
      getStairCombos(stairsCount - 3);
  }
  return memo[stairsCount];
};

console.log(getStairCombos(1));
console.log(getStairCombos(2));
console.log(getStairCombos(3));
console.log(getStairCombos(4));
