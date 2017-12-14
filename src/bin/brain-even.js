#!/usr/bin/env node
import makeCalcGame from '../games/even';
import { run } from '../games/game';

const newEvenGame = makeCalcGame();
run(newEvenGame);
