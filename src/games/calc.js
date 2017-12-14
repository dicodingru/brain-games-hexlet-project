import { getRandomNumber } from '..';
import { makeGame } from './game';

const desc = 'What is the result of the expression?';

const funcQuestion = () => {
  const a = getRandomNumber(10);
  const b = getRandomNumber(10);
  const operation = getRandomNumber(3);
  let question;
  let correct;
  switch (operation) {
    case 0:
      question = `${a} + ${b}`;
      correct = a + b;
      break;
    case 1:
      question = `${a} - ${b}`;
      correct = a - b;
      break;
    default:
      question = `${a} * ${b}`;
      correct = a * b;
      break;
  }
  return [question, correct.toString()];
};

export default () => makeGame(desc, funcQuestion);
