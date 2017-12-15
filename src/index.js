import readlineSync from 'readline-sync';
import runEvenGame from './games/even';
import runCalcGame from './games/calc';
import runGCDGame from './games/gcd';
import runBalanceGame from './games/balance';
import runProgressionGame from './games/progression';
import runPrimeGame from './games/prime';

export const askUserName = () => {
  const userName = readlineSync.question('\x1b[31mMay I have your name? ');
  return userName;
};

export const getUserAnswer = (question) => {
  console.log(`\x1b[30mQuestion: \x1b[34m${question}`);
  const answer = readlineSync.question('\x1b[31mYour \x1b[0manswer: \x1b[34m');
  return answer;
};

export const welcome = (description) => {
  console.log('\x1b[31mWelcome to the Brain Games!');
  if (description) console.log(`${description}`);
  const userName = askUserName();
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

export const chooseTheGame = () => {
  console.log('Choose the game:');
  console.log('1. Even number');
  console.log('2. Calculate the expression');
  console.log('3. Greatest common divisor');
  console.log('4. Balance the number');
  console.log('5. Guess missing number');
  console.log('6. Prime number');
  console.log('0. Exit');
  const choice = readlineSync.question('\x1b[31mYour \x1b[0mchoice: \x1b[34m');
  switch (choice) {
    case '1': runEvenGame(); break;
    case '2': runCalcGame(); break;
    case '3': runGCDGame(); break;
    case '4': runBalanceGame(); break;
    case '5': runProgressionGame(); break;
    case '6': runPrimeGame(); break;
    case '0': break;
    default:
      console.log('No such option. Choose again, please.');
      return chooseTheGame();
  }
};
