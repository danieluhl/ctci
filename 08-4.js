// return all subsets of a set

const getSubsets = (set) => {
  let subset = [...set];
  let subset2 = [...set];
  let subsets = [];
  while (subset2.length > 0) {
    while (subset.length > 0) {
      subsets.push([...subset]);
      subset.pop();
    }
    subset2.shift();
    subset = [...subset2];
    console.log({ subset, subset2 });
  }
  return subsets;
};

console.log(getSubsets([1, 2, 3, 4, 5, 6, 7, 8]));
