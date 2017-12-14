#!/usr/bin/env node
import { getRandomNumber, getYesIfEven } from '..';
import { makeGame, run } from '../games/game';

const funcQuestion = () => {
  const question = getRandomNumber(10000);
  const correct = getYesIfEven(question);
  return [question, correct.toString()];
};

const newEven = makeGame('Answer "yes" if number even otherwise answer "no".', funcQuestion);

run(newEven);
