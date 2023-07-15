import * as utils from '../utils.js';

const MIN_NUMBER = 2;
const MAX_NUMBER = 100;

const POSITIVE_ANSWER = 'yes';
const NEGATIVE_ANSWER = 'no';

export const RULES = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number) => {
  for (let divider = 2; divider < number; divider += 1) {
    if (number % divider === 0) {
      return false;
    }
  }
  return true;
};

export const getQuestionAndAnswer = () => {
  const randomNumber = utils.generateRandomNumberInRange(MIN_NUMBER, MAX_NUMBER);
  const correctAnswer = isPrime(randomNumber) ? POSITIVE_ANSWER : NEGATIVE_ANSWER;

  return [randomNumber, correctAnswer];
};
