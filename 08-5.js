// multiply two integers using only add, subtract, and shift
// must be recrusive, try to minimize operations

const newMult = (a, b) => {
  // if one is odd, shift it right and the other left
  // if one is 1, return the result
  // if both are odd...
  if (a === 1) {
    return b;
  }
  if (a % 2 === 0) {
    return newMult(a >> 1, b << 1);
  }
  return newMult(a - 1, b) + b;
};

console.log(newMult(1, 2)); // 2
console.log(newMult(2, 2)); // 4
console.log(newMult(3, 2)); // 6
