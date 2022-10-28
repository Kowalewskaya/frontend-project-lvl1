#!/usr/bin/env node

import runGame from '../src/index.js';

const rulesOfTheGame = 'What number is missing in the progression?';

const genQuestionAndAnswer = () => {
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const progressionLength = getRandomNumber(5, 10);
  const startProgression = getRandomNumber(1, 20);
  const stepProgression = getRandomNumber(1, 5);
  const randomElementProgression = getRandomNumber(0, progressionLength - 1);
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
runGame(genQuestionAndAnswer, rulesOfTheGame);
