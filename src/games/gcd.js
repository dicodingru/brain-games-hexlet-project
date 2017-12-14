import { getRandomNumber, getEuclidGCD } from '../utils';
import { makeGame, run } from '../games/game';

const desc = 'Find the greatest common divisor of given numbers.';

const funcQuestion = () => {
  const a = getRandomNumber(100);
  const b = getRandomNumber(100);
  const question = `${a} ${b}`;
  const correct = getEuclidGCD(a, b);
  return [question, correct.toString()];
};

export default () => run(makeGame(desc, funcQuestion));
