import * as utils from '../utils.js';

const PROGRESSION_LENGTH = 10;
const MAX_INITIAL_NUMBER = 50;
const MIN_INCREMENT = 2;
const MAX_INCREMENT = 5;
const CONTENT_FILLER = '..';
export const RULES = 'What number is missing in the progression?';

const generateArithmeticProgression = () => {
  const initialProgressionNumber = utils.generateRandomNumber(MAX_INITIAL_NUMBER);
  const progressionIncrement = utils.generateRandomNumberInRange(MIN_INCREMENT, MAX_INCREMENT);

  return Array(PROGRESSION_LENGTH).fill(initialProgressionNumber).map((value, index) => {
    const currentIncrement = progressionIncrement * index;
    return value + currentIncrement;
  });
};

const hideProgressionNumber = (progression) => {
  const randomIndex = utils.generateRandomNumber(progression.length - 1);
  const hiddenNumber = progression[randomIndex];
  const hiddenProgression = progression.slice();
  hiddenProgression[randomIndex] = CONTENT_FILLER;

  return [hiddenProgression, hiddenNumber];
};

export const getQuestionAndAnswer = () => {
  const progression = generateArithmeticProgression();
  const [question, correctAnswer] = hideProgressionNumber(progression);

  return [question, String(correctAnswer)];
};
