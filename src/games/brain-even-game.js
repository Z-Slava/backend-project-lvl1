import readlineSync from 'readline-sync';

import { showWelcomeMessage, askUserName, greetUserByName } from '../cli.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * max + min);

const isEven = (number) => number % 2 === 0;

const getCorrectAnswer = (number) => {
  const booleanAnswer = isEven(number);
  return booleanAnswer === true ? 'yes' : 'no';
};

const isAnswerValid = (answer) => {
  const validOptions = ['yes', 'no'];
  return validOptions.includes(answer);
};

const showFailMessage = (userAnswer, correctAnswer) => {
  console.log(
    `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`,
  );
};

const playRound = () => {
  const minNumber = 1;
  const maxNumber = 25;
  const number = getRandomNumber(minNumber, maxNumber);

  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = getCorrectAnswer(number);

  if (!isAnswerValid(userAnswer)) {
    showFailMessage(userAnswer, correctAnswer);
    return false;
  }
  if (userAnswer !== correctAnswer) {
    showFailMessage(userAnswer, correctAnswer);
    return false;
  }

  console.log('Correct!');

  return true;
};

const playGame = () => {
  const numberOfRounds = 3;
  let isRoundSuccessful = true;

  showWelcomeMessage();

  const name = askUserName();
  greetUserByName(name);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (
    let i = 0;
    i < numberOfRounds && isRoundSuccessful === true;
    i += 1
  ) {
    isRoundSuccessful = playRound();
  }

  if (isRoundSuccessful) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default playGame;
