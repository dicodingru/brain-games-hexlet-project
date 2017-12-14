#!/usr/bin/env node
import makeEvenGame from '../games/even';
import { run } from '../games/game';

const newEvenGame = makeEvenGame();
run(newEvenGame);
