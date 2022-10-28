#!/usr/bin/env node

import runGame from '../src/index.js';

const rulesOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const genQuestionAndAnswer = () => {
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const randomNumber = getRandomNumber(1, 20);
  const isPrime = () => {
    if (randomNumber < 2) {
      return false;
    }
    for (let i = 2; i <= randomNumber / 2; i += 1) {
      if (randomNumber % i === 0) {
        return false;
      }
    }
    return true;
  };
  let result;
  if (isPrime() === true) {
    result = { question: randomNumber, rightAnswer: 'yes' };
  } else {
    result = { question: randomNumber, rightAnswer: 'no' };
  }
  return result;
};
runGame(genQuestionAndAnswer, rulesOfTheGame);
