const decimalToBinary = (dec, pos = 1, result = []) => {
  const sub = 1 / 2 ** pos;
  let next = dec - sub;
  let binaryPosition = 1;
  if (next < 0) {
    binaryPosition = 0;
    next = dec;
  }
  result.push(binaryPosition);

  // check exit conditions
  if (next === 0) {
    return result.join('');
  } else if (pos === 32) {
    return 'ERROR';
  }
  return decimalToBinary(next, pos + 1, result);
};

console.log(decimalToBinary(0.75));
console.log(decimalToBinary(0.25));

const printBinary = (num) => {
  if (num >= 1 || num <= 0) {
    return 'ERROR';
  }

  let binary = '';
  while (num > 0) {
    if (binary.length >= 32) {
      return 'ERROR';
    }

    const twoNum = num * 2;
    if (twoNum >= 1) {
      binary = binary + '1';
      num = twoNum - 1;
    } else {
      binary = binary + '0';
      num = twoNum; // essentially shift everything over so we can check the next bit
    }
  }
  return binary;
};

console.log(printBinary(0.75));
console.log(printBinary(0.25));
