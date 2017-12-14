import { getRandomNumber, getUserAnswer } from '..';
import { makeGame, run } from '../games/game';

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

  const answer = getUserAnswer(question);

  return [answer, correct.toString()];
};

const newCalc = makeGame('What is the result of the expression?', funcQuestion);

run(newCalc);
