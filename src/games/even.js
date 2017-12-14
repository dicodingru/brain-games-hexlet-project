import { getRandomNumber } from '../utils';
import { makeGame, run } from '../games/game';

const desc = 'Answer "yes" if number even otherwise answer "no".';

const funcQuestion = () => {
  const question = getRandomNumber(10000);
  let correct;
  if (question % 2 === 0) {
    correct = 'yes';
  } else {
    correct = 'no';
  }
  return [question, correct];
};

export default () => run(makeGame(desc, funcQuestion));
