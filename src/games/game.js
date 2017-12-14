import { askUserName, getUserAnswer } from '..';

export const makeGame = (desc, funcQuestion) => (message) => {
  switch (message) {
    case 'desc':
      return desc;
    case 'question':
      return funcQuestion;
    default:
      return undefined;
  }
};

const getDesc = game => game('desc');
const getQuestionAnswer = game => game('question');

export const run = (game) => {
  const desc = getDesc(game);

  console.log('\x1b[31mWelcome to the Brain Games!');
  console.log(`${desc}`);
  const user = askUserName();
  console.log(`Hello, ${user}!\n`);

  const ask = (attempt = 1) => {
    if (attempt > 3) {
      console.log(`\x1b[31mCongratulations, ${user}!`);
      return undefined;
    }

    const qa = getQuestionAnswer(game)();
    const question = qa[0];
    const correctAnswer = qa[1];
    const userAnswer = getUserAnswer(question);

    if (userAnswer !== correctAnswer) {
      console.log(`\x1b[31m'${userAnswer}' \x1b[0mis wrong answer ;(. Correct answer was \x1b[31m'${correctAnswer}'\x1b[0m.`);
      console.log(`Let\x1b[31m's try again, ${user}!`);
      return undefined;
    }
    console.log('\x1b[31mCorrect!');
    return ask(attempt + 1);
  };

  ask();
};
