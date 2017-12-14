import { getRandomNumber, getProgression } from '../utils';
import { makeGame, run } from '../games/game';

const desc = 'What number is missing in this progression?';

const funcQuestion = () => {
  const a = getRandomNumber(100);
  const d = getRandomNumber(10) + 1;
  const start = getRandomNumber(50);
  const progression = getProgression(n => a + (d * (n - 1)), start, 10);

  const correct = progression.splice(5, 1, ['..']);
  const question = progression.join(' ');

  return [question, correct.toString()];
};

export default () => run(makeGame(desc, funcQuestion));
