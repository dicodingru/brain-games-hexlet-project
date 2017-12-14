import { getRandomNumber, isPrime } from '../utils';
import { makeGame, run } from '../games/game';

const desc = 'Is this number prime?';

const funcQuestion = () => {
  const question = getRandomNumber(100);
  let correct;
  if (isPrime(question)) {
    correct = 'yes';
  } else {
    correct = 'no';
  }
  return [question, correct];
};

export default () => run(makeGame(desc, funcQuestion));
