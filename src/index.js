import readlineSync from 'readline-sync';

export const askUserName = () => {
  const userName = readlineSync.question('\x1b[31mMay I have your name? ');
  return userName;
};

export const welcome = (description) => {
  console.log('\x1b[31mWelcome to the Brain Games!');
  if (description) console.log(`${description}`);
  const userName = askUserName();
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

export const getRandomNumber = base => Math.floor(Math.random() * base);

export const getUserAnswer = (question) => {
  console.log(`\x1b[30mQuestion: \x1b[34m${question}`);
  const answer = readlineSync.question('\x1b[31mYour \x1b[0manswer: \x1b[34m');
  return answer;
};

export const getYesIfEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
