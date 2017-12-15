import { getRandomNumber, getProgression } from '../utils';
import { run } from '..';

const desc = 'What number is missing in this progression?';

const getQA = () => {
  const a = getRandomNumber(100);
  const d = getRandomNumber(10) + 1;
  const start = getRandomNumber(50);
  const missed = getRandomNumber(10);
  const progression = getProgression(n => a + (d * (n - 1)), start, 10);

  const correct = progression.splice(missed, 1, ['..']);
  const question = progression.join(' ');

  return [question, correct.toString()];
};

export default () => run(desc, getQA);
