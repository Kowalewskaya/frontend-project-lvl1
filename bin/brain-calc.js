#!/usr/bin/env node

import runGame from '../src/index.js';

const rulesOfTheGame = 'What is the result of the expression?';

const genQuestionAndAnswer = () => {
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  const arithmeticSigns = ['+', '-', '*'];
  const sign = arithmeticSigns[getRandomNumber(0, 2)];

  const randomNumberOne = getRandomNumber(1, 20);
  const randomNumberTwo = getRandomNumber(1, 20);

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
runGame(genQuestionAndAnswer, rulesOfTheGame);
