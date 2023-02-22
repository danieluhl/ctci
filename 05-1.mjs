// merge binary numbers at index
// 1001000
// 1001
// 1
// 4
// result: 1010010
const merge = (num1, num2, startIndex, endIndex) => {
  // zero out the range
  // shift num2 by startIndex
  // & the numbers
  // 10xxxx0
  // add the ones
  const shiftSize = endIndex - startIndex;
  let mask = 1;
  for (let i = 0; i < shiftSize; i++) {
    mask = mask << 1;
    mask = mask + 1;
  }
  // add the zeros
  let maskedTwo = num2;
  for (let i = 0; i < startIndex; i++) {
    mask = mask << 1;
    maskedTwo = maskedTwo << 1;
  }
  console.log('mask:', mask.toString(2)); // 8
  let maskResult = num1 & ~mask;
  console.log(maskResult.toString(2)); // 8
  console.log(maskedTwo.toString(2)); // 18
  console.log((maskResult | maskedTwo).toString(2));
  return maskResult & maskedTwo;
};

console.log(merge(0b1001000, 0b1001, 1, 4));
