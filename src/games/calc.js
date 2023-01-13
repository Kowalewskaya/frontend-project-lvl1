#!/usr/bin/env node

import runGame from '../index.js';
import { genRandomNumber } from '../helpers.js';

const rulesOfTheGame = 'What is the result of the expression?';

const genQuestionAndAnswer = () => {
  const arithmeticSigns = ['+', '-', '*'];
  const sign = arithmeticSigns[genRandomNumber(0, 2)];

  const randomNumberOne = genRandomNumber(1, 20);
  const randomNumberTwo = genRandomNumber(1, 20);

  let answer = 0;

  // eslint-disable-next-line default-case
  switch (sign) {
    case '+':
      answer = randomNumberOne + randomNumberTwo;
      break;
    case '-':
      answer = randomNumberOne - randomNumberTwo;
      break;
    case '*':
      answer = randomNumberOne * randomNumberTwo;
      break;
  }
  return { question: `${randomNumberOne} ${sign} ${randomNumberTwo}`, rightAnswer: String(answer) };
};
export default () => runGame(genQuestionAndAnswer, rulesOfTheGame);
