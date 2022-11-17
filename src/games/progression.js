#!/usr/bin/env node

import runGame from '../index.js';
import { genRandomNumber } from '../helpers.js';

const rulesOfTheGame = 'What number is missing in the progression?';

const genQuestionAndAnswer = () => {
  const progressionLength = genRandomNumber(5, 10);
  const startProgression = genRandomNumber(1, 20);
  const stepProgression = genRandomNumber(1, 5);
  const randomElementProgression = genRandomNumber(0, progressionLength - 1);
  const arr = [];
  const censored = '..';
  for (let i = startProgression; arr.length <= progressionLength - 1; i += stepProgression) {
    arr.push(i);
  }
  const censoredElementProgression = arr[randomElementProgression];
  arr[randomElementProgression] = censored;
  const progression = arr.join(' ');
  return { question: `${progression}`, rightAnswer: `${censoredElementProgression}` };
};
export default () => runGame(genQuestionAndAnswer, rulesOfTheGame);
