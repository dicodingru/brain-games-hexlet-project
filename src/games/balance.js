import { getRandomNumber, getBalancedNumber } from '../utils';
import { run } from '..';

const desc = 'Balance the given number.';

const getQA = () => {
  const question = getRandomNumber(10000);
  const correct = getBalancedNumber(question);
  return [question, correct];
};

export default () => run(desc, getQA);
