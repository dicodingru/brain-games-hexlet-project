import { getRandomNumber, getYesIfEven } from '..';
import { makeGame } from '../games/game';

const desc = 'Answer "yes" if number even otherwise answer "no".';

const funcQuestion = () => {
  const question = getRandomNumber(10000);
  const correct = getYesIfEven(question);
  return [question, correct.toString()];
};

export default () => makeGame(desc, funcQuestion);
