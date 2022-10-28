#!/usr/bin/env node

import runGame from '../src/index.js';

const rulesOfTheGame = 'Find the greatest common divisor of given numbers.';

const genQuestionAndAnswer = () => {
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const arr = [num1, num2];
  const lesserNumber = Math.min(...arr);
  let divider = 0;
  for (let i = 2; i <= lesserNumber; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      divider = i;
    }
  }
  if (divider === 0) {
    divider = 1;
  }
  const randomNumbers = arr.join(' ');
  return { question: `${randomNumbers}`, rightAnswer: String(divider) };
};
runGame(genQuestionAndAnswer, rulesOfTheGame);
