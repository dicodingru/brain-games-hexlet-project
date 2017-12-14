export const getEuclidGCD = (a, b) => {
  if (a < b) return getEuclidGCD(b, a);
  if (b === 0) return a;
  return getEuclidGCD(b, a % b);
};

export default base => Math.floor(Math.random() * base);
