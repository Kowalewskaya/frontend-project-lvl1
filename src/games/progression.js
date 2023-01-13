#!/usr/bin/env node

import runGame from '../index.js';
import { genRandomNumber } from '../helpers.js';

const rulesOfTheGame = 'What number is missing in the progression?';

const makeProgression = (length, start, step) => {
  const result = [];

  for (let i = 0; i < length; i += 1) {
    result.push(start + step * i);
  }

  return result;
};

const genQuestionAndAnswer = () => {
  const length = genRandomNumber(5, 10);
  const start = genRandomNumber(1, 20);
  const step = genRandomNumber(1, 5);
  const array = makeProgression(length, start, step);
  const randomElementProgression = genRandomNumber(0, length - 1);
  const censored = '..';
  const censoredElementProgression = array[randomElementProgression];
  array[randomElementProgression] = censored;
  const progression = array.join(' ');
  return { question: `${progression}`, rightAnswer: `${censoredElementProgression}` };
};
export default () => runGame(genQuestionAndAnswer, rulesOfTheGame);
