// distinct sorted array
// magic number is one that matches it's index in the array
// find a magic number, if any
// bonus: what if not distinct

const findMagicNumberByOffset = (arr, offset = 0) => {
  // as soon as the number > index, we're done
  // binary search seems good here?
  const middle = Math.floor(arr.length / 2);
  const middleVal = arr[middle];
  const trueMiddle = middle + offset;
  if (trueMiddle === middleVal) {
    return trueMiddle;
  }
  if (trueMiddle < middleVal) {
    return findMagicNumberByOffset(arr.slice(0, middle), offset);
  } else if (trueMiddle > middleVal) {
    return findMagicNumberByOffset(
      arr.slice(middle + 1, arr.length),
      middle + 1
    );
  }
  return 'none found';
};

const findMagicNumber = (arr, start = 0, end = arr.length - 1) => {
  const mid = Math.floor((start + end) / 2);
  if (start > end) {
    return -1;
  }
  if (arr[mid] === mid) {
    return mid;
  }

  if (arr[mid] < mid) {
    return findMagicNumber(arr, mid + 1, end);
  }

  if (arr[mid] > mid) {
    return findMagicNumber(arr, start, mid - 1);
  }
};

const findMagicNumberNonDistinct = (arr, start = 0, end = arr.length - 1) => {
  const mid = Math.floor((start + end) / 2);
  const midValue = arr[mid];
  if (start > end) {
    return -1;
  }
  if (midValue === mid) {
    return mid;
  }

  const leftResult = findMagicNumber(arr, start, Math.min(mid - 1, midValue));
  const rightResult = findMagicNumber(arr, Math.max(mid + 1, midValue), end);
  if (leftResult > -1) {
    return leftResult;
  }
  return rightResult;
};

console.log(findMagicNumber([-1, -2, -3, 3, 4, 5, 6])); // 3
console.log(findMagicNumber([1, 2, 3])); // none found
console.log(findMagicNumber([0, 1, 2, 3])); // 2
console.log(findMagicNumber([-1, 0, 1, 3, 5, 6, 7, 8, 9, 10, 11])); // 3
console.log(findMagicNumberNonDistinct([1, 1, 1])); // 1
console.log(findMagicNumberNonDistinct([2, 2, 2, 2])); // 2
console.log(findMagicNumberNonDistinct([3, 3, 3, 3])); // 3
