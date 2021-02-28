import readlineSync from 'readline-sync';

import { showFailMessage } from '../cli.js';
import { getRandomNumber } from '../utils/index.js';

const showGameRules = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

const decomposition = (number) => {
  const iter = (num, divider, acc) => {
    if (num % divider === 0 && num / divider === 1) {
      return [...acc, divider];
    }
    if (num % divider === 0) {
      return iter(num / divider, divider, [...acc, divider]);
    }
    return iter(num, divider + 1, acc);
  };

  const minDivider = 2;
  if (number < minDivider) {
    return [number];
  }

  return iter(number, minDivider, [1]);
};

const intersection = (arr1, arr2) => {
  let pointer1 = 0;
  let pointer2 = 0;
  const result = [];

  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    const firstElement = arr1[pointer1];
    const secondElement = arr2[pointer2];

    if (firstElement === secondElement) {
      result.push(firstElement);
      pointer1 += 1;
      pointer2 += 1;
    }
    if (firstElement < secondElement) {
      pointer1 += 1;
    }
    if (firstElement > secondElement) {
      pointer2 += 1;
    }
  }

  return result;
};

const getCorrectAnswer = (number1, number2) => {
  const decompositionOfFirstNumber = decomposition(number1);
  const decompositionOfSecondNumber = decomposition(number2);

  const commonMultipliers = intersection(decompositionOfFirstNumber, decompositionOfSecondNumber);

  const gcd = commonMultipliers.reduce((acc, element) => acc * element, 1);

  return gcd;
};

const playRound = () => {
  const minNumber = 1;
  const maxNumber = 50;

  const number1 = getRandomNumber(minNumber, maxNumber);
  const number2 = getRandomNumber(minNumber, maxNumber);

  console.log(`Question: ${number1} ${number2}`);
  const userAnswer = readlineSync.questionInt('Your answer: ');
  const correctAnswer = getCorrectAnswer(number1, number2);

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
