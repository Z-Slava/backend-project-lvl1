import readlineSync from 'readline-sync';

import { showFailMessage } from '../cli.js';
import { getRandomNumber, getRandomOperation } from '../utils/index.js';

const showGameRules = () => {
  console.log('What is the result of the expression?');
};

const getCorrectAnswer = (number1, number2, operation) => {
  const mapping = {
    '+': number1 + number2,
    '-': number1 - number2,
    '*': number1 * number2,
  };

  return mapping[operation];
};

const playRound = () => {
  const minNumber = 1;
  const maxNumber = 15;
  const availableOperations = ['+', '-', '*'];

  const number1 = getRandomNumber(minNumber, maxNumber);
  const number2 = getRandomNumber(minNumber, maxNumber);
  const operation = getRandomOperation(availableOperations);

  console.log(`Question: ${number1} ${operation} ${number2}`);
  const userAnswer = readlineSync.questionInt('Your answer: ');
  const correctAnswer = getCorrectAnswer(number1, number2, operation);

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
