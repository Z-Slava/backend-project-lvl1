import * as utils from '../utils.js';

export const RULES = 'What is the result of the expression?';
const OPERATORS = ['+', '-', '*'];
const OPERATIONS_MAP = {
  '+': (firstValue, secondValue) => firstValue + secondValue,
  '-': (firstValue, secondValue) => firstValue - secondValue,
  '*': (firstValue, secondValue) => firstValue * secondValue,
};

const getRandomOperator = () => {
  const randomIndex = utils.generateRandomNumber(OPERATORS.length - 1);
  return OPERATORS[randomIndex];
};

export const getQuestionAndAnswer = () => {
  const randomOperator = getRandomOperator();
  const firstNumber = utils.generateRandomNumber(10);
  const secondNumber = utils.generateRandomNumber(10);

  const question = `${firstNumber} ${randomOperator} ${secondNumber}`;
  const correctAnswer = OPERATIONS_MAP[randomOperator](firstNumber, secondNumber);

  return [question, String(correctAnswer)];
};
