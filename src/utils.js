export const getEuclidGCD = (a, b) => {
  if (a < b) return getEuclidGCD(b, a);
  if (b === 0) return a;
  return getEuclidGCD(b, a % b);
};

export const getBalancedNumber = (num) => {
  const numToArr = num.toString().split('').sort();
  const iter = (arr) => {
    const a = parseInt(arr.slice(0), 10);
    const b = parseInt(arr.slice(-1), 10);
    if (b - a < 2) return arr;
    const newArr = [b - 1].concat(arr.slice(1, -1)).concat(a + 1).sort();
    return iter(newArr);
  };
  return iter(numToArr).join('');
};

export const getRandomNumber = base => Math.floor(Math.random() * base);
