import { getRandomNumber, isPrime } from '../utils';
import { run } from '..';

const desc = 'Is this number prime?';

const getQA = () => {
  const question = getRandomNumber(100);
  let correct;
  if (isPrime(question)) {
    correct = 'yes';
  } else {
    correct = 'no';
  }
  return [question, correct];
};

export default () => run(desc, getQA);
