#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const getUserName = () => readlineSync.question('May I have your name? ');

const userName = getUserName();

const generateGreeting = (uName) => `Hello, ${uName}!`;
console.log(generateGreeting(userName));

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const makeParityCheckGame = () => {
  let successAnswersCount = 0;
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber(1, 20);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === 'yes' && randomNumber % 2 === 0) {
      console.log('Correct!');
      successAnswersCount += 1;
    } else if (answer === 'no' && randomNumber % 2 !== 0) {
      console.log('Correct!');
      successAnswersCount += 1;
    } else {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (successAnswersCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

makeParityCheckGame();
