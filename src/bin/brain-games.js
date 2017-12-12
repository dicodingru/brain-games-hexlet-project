#!/usr/bin/env node
import { magenta, black } from 'colors';
import { askUserName } from '..';

console.log(`${magenta('Welcome')} to the ${black('Brain')} Games!`);

const userName = askUserName();
console.log(`Hello, ${userName}!`);
