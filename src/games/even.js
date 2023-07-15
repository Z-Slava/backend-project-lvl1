import * as utils from '../utils.js';

const MAX_NUMBER = 100;

const POSITIVE_ANSWER = 'yes';
const NEGATIVE_ANSWER = 'no';

export const RULES = 'Answer "yes" if the number is even, otherwise answer "no".';

export const getQuestionAndAnswer = () => {
  const randomNumber = utils.generateRandomNumber(MAX_NUMBER);
  const correctAnswer = utils.isEven(randomNumber) ? POSITIVE_ANSWER : NEGATIVE_ANSWER;

  return [randomNumber, correctAnswer];
};
