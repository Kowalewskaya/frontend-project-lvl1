import readlineSync from 'readline-sync';

const runGame = (genQuestionAndAnswer, rulesOfTheGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  const greeting = `Hello, ${userName}!`;
  console.log(greeting);
  console.log(rulesOfTheGame);

  for (let i = 0; i < 3; i += 1) {
    const questionAndAnswer = genQuestionAndAnswer();
    console.log(`Question: ${questionAndAnswer.question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === questionAndAnswer.rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${questionAndAnswer.rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
