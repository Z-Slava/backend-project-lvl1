import * as utils from '../utils.js';

const MAX_NUMBER = 50;

export const RULES = 'Find the greatest common divisor of given numbers';

const getGreatestCommonDivisor = (firstNumber, secondNumber) => {
  if (firstNumber === 0 || secondNumber === 0) {
    return firstNumber + secondNumber;
  }
  if (firstNumber > secondNumber) {
    return getGreatestCommonDivisor(firstNumber - secondNumber, secondNumber);
  }
  return getGreatestCommonDivisor(firstNumber, secondNumber - firstNumber);
};

export const getQuestionAndAnswer = () => {
  const firstNumber = utils.generateRandomNumber(MAX_NUMBER);
  const secondNumber = utils.generateRandomNumber(MAX_NUMBER);

  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getGreatestCommonDivisor(firstNumber, secondNumber);

  return [question, String(correctAnswer)];
};
