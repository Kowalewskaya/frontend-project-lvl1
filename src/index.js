import readlineSync from 'readline-sync';

const runGame = (genQuestionAndAnswer, rulesOfTheGame) => {
  console.log('Welcome to the Brain Games!');
  const getUserName = () => readlineSync.question('May I have your name? ');
  const userName = getUserName();
  const generateGreeting = (uName) => `Hello, ${uName}!`;
  console.log(generateGreeting(userName));
  console.log(rulesOfTheGame);

  let successAnswersCount = 0;
  for (let i = 0; i < 3; i += 1) {
    const questionAndAnswer = genQuestionAndAnswer();
    console.log(`Question: ${questionAndAnswer.question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === questionAndAnswer.rightAnswer) {
      console.log('Correct!');
      successAnswersCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${questionAndAnswer.rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (successAnswersCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default runGame;
