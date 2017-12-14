#!/usr/bin/env node
import makeCalcGame from '../games/calc';
import { run } from '../games/game';

const newCalcGame = makeCalcGame();
run(newCalcGame);
