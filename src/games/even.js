import { getRandomNumber, isEven } from '../utils';
import { run } from '..';

const desc = 'Answer "yes" if number even otherwise answer "no".';

const getQA = () => {
  const question = getRandomNumber(10000);
  let correct;
  if (isEven(question)) {
    correct = 'yes';
  } else {
    correct = 'no';
  }
  return [question, correct];
};

export default () => run(desc, getQA);
