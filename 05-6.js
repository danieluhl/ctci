// function that tells nubmer of bits that are different between two numbers

function diffBits(n1, n2) {
  // xor and count the bits?
  const res = n1 ^ n2;
  console.log({ res });
  console.log(res.toString(2));
  const differentCount = res
    .toString(2)
    .split('')
    .reduce((bits, next) => {
      return bits + parseInt(next, 10);
    }, 0);
  return differentCount;
}

console.log(diffBits(parseInt('1100011', 2), parseInt('1111100', 2)));
