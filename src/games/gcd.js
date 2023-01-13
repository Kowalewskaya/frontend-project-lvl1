#!/usr/bin/env node

import runGame from '../index.js';
import { genRandomNumber } from '../helpers.js';

const rulesOfTheGame = 'Find the greatest common divisor of given numbers.';

const findDivider = (lesserNumber, num1, num2) => {
  let divider = 0;

  for (let i = 2; i <= lesserNumber; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      divider = i;
    }
    if (divider === 0) {
      divider = 1;
    }
  }

  return divider;
};

const genQuestionAndAnswer = () => {
  const num1 = genRandomNumber(1, 100);
  const num2 = genRandomNumber(1, 100);
  const arr = [num1, num2];
  const lesserNumber = Math.min(...arr);
  const divider = findDivider(lesserNumber, num1, num2);
  const randomNumbers = arr.join(' ');
  return { question: `${randomNumbers}`, rightAnswer: String(divider) };
};
export default () => runGame(genQuestionAndAnswer, rulesOfTheGame);
