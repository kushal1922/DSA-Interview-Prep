function PowOfTwo(n) {
  if (n === 1) return true;
  else if (n < 1 || n % 2 !== 0) return false;
  return PowOfTwo(n / 2);
}
console.log(PowOfTwo(16));
