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

export const isEven = number => !(number % 2);

export const isPrime = (number) => {
  if (number < 2) return false;
  if (number < 4) return true;
  const stop = number / 2;
  const iter = (counter) => {
    if (number % counter === 0) return false;
    if (counter > stop) return true;
    return iter(counter + 1);
  };
  return iter(2);
};

export const getProgression = (fn, start, count) =>
  new Array(count).fill(0).map((elem, index) => fn(start + index));
