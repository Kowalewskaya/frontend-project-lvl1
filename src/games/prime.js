#!/usr/bin/env node

import runGame from '../index.js';
import { genRandomNumber, isPrime } from '../helpers.js';

const rulesOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const genQuestionAndAnswer = () => {
  const randomNumber = genRandomNumber(1, 20);
  isPrime(randomNumber);
  let result;
  if (isPrime() === true) {
    result = { question: randomNumber, rightAnswer: 'yes' };
  } else {
    result = { question: randomNumber, rightAnswer: 'no' };
  }
  return result;
};
export default () => runGame(genQuestionAndAnswer, rulesOfTheGame);
