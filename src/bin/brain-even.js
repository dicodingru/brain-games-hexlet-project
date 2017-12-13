#!/usr/bin/env node
import { welcome, getRandomNumber, getUserAnswer, getCorrectAnswer } from '..';

const user = welcome('Answer "yes" if number even otherwise answer "no".');

const maxValue = 10000;

const game = (attempt) => {
  if (attempt > 3) {
    console.log(`\x1b[31mCongratulations, ${user}!`);
    return undefined;
  }
  const number = getRandomNumber(maxValue);
  const answer = getUserAnswer(number);
  const correct = getCorrectAnswer(number);

  if (answer !== correct) {
    console.log(`\x1b[31m'${answer}' \x1b[0mis wrong answer ;(. Correct answer was \x1b[31m'${correct}'\x1b[0m.`);
    console.log(`Let\x1b[31m's try again, ${user}!`);
    return undefined;
  }

  console.log('\x1b[31mCorrect!');
  return game(attempt + 1);
};

game(1, 10000);
