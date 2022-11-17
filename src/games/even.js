#!/usr/bin/env node

import runGame from '../index.js';
import { genRandomNumber } from '../helpers.js';

const rulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const genQuestionAndAnswer = () => {
  const randomNumber = genRandomNumber(1, 20);
  let result;
  if (randomNumber % 2 === 0) {
    result = { question: randomNumber, rightAnswer: 'yes' };
  } else {
    result = { question: randomNumber, rightAnswer: 'no' };
  }
  return result;
};

export default () => runGame(genQuestionAndAnswer, rulesOfTheGame);
