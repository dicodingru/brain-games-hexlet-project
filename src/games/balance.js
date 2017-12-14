import { getRandomNumber, getBalancedNumber } from '../utils';
import { makeGame, run } from '../games/game';

const desc = 'Balance the given number.';

const funcQuestion = () => {
  const question = getRandomNumber(10000);
  const correct = getBalancedNumber(question);
  return [question, correct];
};

export default () => run(makeGame(desc, funcQuestion));
