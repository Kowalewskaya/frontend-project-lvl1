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
  let result;

  switch (sign) {
    case '+':
      answer = randomNumberOne + randomNumberTwo;
      result = { question: `${randomNumberOne} + ${randomNumberTwo}`, rightAnswer: String(answer) };
      break;
    case '-':
      answer = randomNumberOne - randomNumberTwo;
      result = { question: `${randomNumberOne} - ${randomNumberTwo}`, rightAnswer: String(answer) };
      break;
    case '*':
      answer = randomNumberOne * randomNumberTwo;
      result = { question: `${randomNumberOne} * ${randomNumberTwo}`, rightAnswer: String(answer) };
      break;
    default:
      answer = null;
  }
  return result;
};
export default () => runGame(genQuestionAndAnswer, rulesOfTheGame);
