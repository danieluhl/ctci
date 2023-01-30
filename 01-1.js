const isUniqueChars = (str) => {
  let checker = 0;
  for (let i = 0; i < str.length; i++) {
    const val = str.charCodeAt(i) - 'a'.charCodeAt(0);
    console.log({val});
    console.log({shifted: 1 << val});
    console.log({checker});
    console.log(checker & (1 << val));
    if (checker & (1 << val)) {
      return false;
    }
    checker |= 1 << val;
  }
  return true;
};

// console.log(isUniqueChars("abxdea"));
// console.log(isUniqueChars("abcde"));

/** 1.3 replace spaces with %20 **/
const replaceSpaces = (str) => {
  const size = str.length;
  const result = new Array(size)
  let resultPointer = 0;
  for (let i = 0; resultPointer < size; i++) {
    const char = str.charAt(i);
    if (char === ' ') {
      result[resultPointer] = '%';
      resultPointer = resultPointer + 1;
      result[resultPointer] = '2';
      resultPointer = resultPointer + 1;
      result[resultPointer] = '0';
      resultPointer = resultPointer + 1;
    } else {
      result[resultPointer] = char;
      resultPointer = resultPointer + 1;
    }
  }
  return result.join('');
};
// const testCases = [
//   [replaceSpaces(' foo bar    '), '%20foo%20bar'],
//   [replaceSpaces('foo bar  '), 'foo%20bar'],
// ];

const SPACE = ' ';
const URL_SPACE = '%20';
const replaceSpaces2 = (str) => str.trimEnd().replaceAll(SPACE, URL_SPACE);
// const testCases = [
//   [replaceSpaces2(' foo bar    '), '%20foo%20bar'],
//   [replaceSpaces2('foo bar  '), 'foo%20bar'],
// ];

const palindrome1 = (str) => {
  const arr = [...str.replaceAll(' ', '').toLowerCase()];
  const counts = arr.reduce((acc, next) => {
    acc[next] ??= 0;
    acc[next] = acc[next] + 1;
    return acc;
  }, {});
  const oddCount = Object.values(counts).filter(
    (count) => count % 2 !== 0
  ).length;
  return oddCount <= 1;
};

// const testCases = [
//   [palindrome1, 'TaCo Cat', true],
//   [palindrome1, 'baaccaaab', true],
//   [palindrome1, 'bbaaccaaab', false],
//   [palindrome1, 'bbbb', true],
// ];

const palindrome2 = (str) => {
  const arr = [...str.replaceAll(' ', '').toLowerCase()];
  const lowerA = 'a'.charCodeAt(0) - 1;
  const result = arr.reduce((acc, next) => {
    const letter = next.charCodeAt(0) - lowerA;
    // e.g. for 5 it would be 10000
    const bitPos = 1 << letter;
    // xor with letter to "flip" the bit at that char position
    acc = acc ^ bitPos;
    return acc;
  }, 0);
  return result === 0 || Math.log2(result) % 1 === 0;
  return result & (result - 1 === 0);
};
// const testCases = [
//   [palindrome2, 'TaCo Cat', true],
//   [palindrome2, 'baaccaaab', true],
//   [palindrome2, 'bbaaccaaab', false],
//   [palindrome2, 'aa', true],
//   [palindrome2, 'z', true],
// ];

const isOneAway = ([str, compare]) => {
  const diffIndex = getFirstDifferenceIndex(str, compare);

  // if they're the same string already
  if (diffIndex === -1) {
    return false;
  }
  if (str.length - compare.length === 1) {
    str = str.slice(0, diffIndex) + str.slice(diffIndex + 1, str.length);
  } else if (compare.length - str.length === 1) {
    compare =
      compare.slice(0, diffIndex) +
      compare.slice(diffIndex + 1, compare.length);
  } else if (compare.length === str.length) {
    compare =
      compare.slice(0, diffIndex) +
      compare.slice(diffIndex + 1, compare.length);
    str = str.slice(0, diffIndex) + str.slice(diffIndex + 1, str.length);
  }
  return str === compare;
};
const getFirstDifferenceIndex = (str1, str2) => {
  const length = str1.length > str2.length ? str1.length : str2.length;
  for (let i = 0; i < length; i++) {
    if (str1[i] !== str2[i]) {
      return i;
    }
  }
  return -1;
};
// const testCases = [
//   [isOneAway, ['abc', 'acc'], true],
//   [isOneAway, ['bc', 'abc'], true],
//   [isOneAway, ['abc', 'bc'], true],
//   [isOneAway, ['abc', 'c'], false],
// ];

const compressString = ([str]) => {
  const len = str.length;
  let i = 0;
  let result = [];
  while (i < str.length) {
    let cur = str[i];
    let count = 0;
    while (str[i] === cur) {
      count++;
      i++;
    }
    result.push(`${cur}${count}`);
  }
  result = result.join('');
  if (result.length < len) {
    return result;
  }
  return str;
};
// const testCases = [
//   [compressString, ['aabbbcc'], 'a2b3c2'],
//   [compressString, ['aabbcc'], 'aabbcc'],
// ];

const rotateMatrix = ([inMatrix]) => {
  const inHeight = inMatrix.length;
  const inWidth = inMatrix[0].length;
  // initialize output
  const outMatrix = [];
  for (let i = 0; i < inWidth; i++) {
    outMatrix[i] = [];
  }
  for (let x = 0; x < inHeight; x++) {
    for (let y = 0; y < inWidth; y++) {
      outMatrix[y].unshift(inMatrix[x][y]);
    }
  }
  return outMatrix;
};

const testCases = [
  [
    rotateMatrix,
    [
      [
        [1, 2, 3],
        [4, 5, 6],
      ],
    ],
    [
      [4, 1],
      [5, 2],
      [6, 3],
    ],
  ],
];

//  RUN TESTS
testCases.forEach(([fn, input, expected]) => {
  const result = fn(input);
  console.assert(
    result === expected,
    `${input}\n EXPECTED: ${expected}\n GOT: ${result}`
  );
});
