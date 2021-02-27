import readlineSync from 'readline-sync';

import { showFailMessage } from '../cli.js';
import { getRandomNumber } from '../utils/index.js';

const showGameRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const isEven = (number) => number % 2 === 0;

const getCorrectAnswer = (number) => {
  const booleanAnswer = isEven(number);
  return booleanAnswer === true ? 'yes' : 'no';
};

const isAnswerValid = (answer) => {
  const validOptions = ['yes', 'no'];
  return validOptions.includes(answer);
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

const game = {
  showGameRules,
  playRound,
};

export default game;
