const findLargestRun = (binaryString) => {
  // const binaryString = num.toString(2);
  let currentRun = 0;
  let combinedRun = 0;
  let isSecondZero = false;
  let longestRun = 0;
  [...binaryString].forEach((digit) => {
    if (digit === '1') {
      currentRun++;
      combinedRun++;
      return;
    }
    if (isSecondZero) {
      longestRun = Math.max(longestRun, combinedRun);
      combinedRun = currentRun + 1;
      isSecondZero = false;
    } else {
      isSecondZero = true;
      combinedRun++;
      currentRun = 0;
    }
  });
  return Math.max(longestRun, combinedRun);
};

console.log(findLargestRun('1011101111')); // 8
console.log(findLargestRun('1011111111')); // 10
console.log(findLargestRun('1111111111')); // 10
console.log(findLargestRun('0000000000')); // 10
