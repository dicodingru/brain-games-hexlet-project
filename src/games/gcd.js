import { getRandomNumber, getEuclidGCD } from '../utils';
import { run } from '..';

const desc = 'Find the greatest common divisor of given numbers.';

const getQA = () => {
  const a = getRandomNumber(100);
  const b = getRandomNumber(100);
  const question = `${a} ${b}`;
  const correct = getEuclidGCD(a, b);
  return [question, correct.toString()];
};

export default () => run(desc, getQA);
