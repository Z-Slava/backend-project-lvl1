import readlineSync from 'readline-sync';

import { showFailMessage } from '../cli.js';
import { getRandomNumber } from '../utils/index.js';

export default (minNumber, maxNumber, getCorrectAnswer) => () => {
  const number = getRandomNumber(minNumber, maxNumber);

  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = getCorrectAnswer(number);

  if (userAnswer !== correctAnswer) {
    showFailMessage(userAnswer, correctAnswer);
    return false;
  }

  console.log('Correct!');

  return true;
};
