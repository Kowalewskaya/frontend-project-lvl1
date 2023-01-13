#!/usr/bin/env node

import runGame from '../index.js';
import { genRandomNumber, isPrime } from '../helpers.js';

const rulesOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const genQuestionAndAnswer = () => {
  const randomNumber = genRandomNumber(1, 20);
  return { question: randomNumber, rightAnswer: (isPrime(randomNumber) === true) ? 'yes' : 'no' };
};
export default () => runGame(genQuestionAndAnswer, rulesOfTheGame);
