#!/usr/bin/env node

import runGame from '../index.js';
import { genRandomNumber } from '../helpers.js';

const rulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const genQuestionAndAnswer = () => {
  const randomNumber = genRandomNumber(1, 20);
  return { question: randomNumber, rightAnswer: (randomNumber % 2 === 0) ? 'yes' : 'no' };
};

export default () => runGame(genQuestionAndAnswer, rulesOfTheGame);
