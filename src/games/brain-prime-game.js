import readlineSync from 'readline-sync';

import { showFailMessage } from '../cli.js';
import { getRandomNumber } from '../utils/index.js';

const showGameRules = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getCorrectAnswer = (number) => (isPrime(number) ? 'yes' : 'no');

const playRound = () => {
  const minNumber = 1;
  const maxNumber = 100;

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

const game = {
  showGameRules,
  playRound,
};

export default game;
