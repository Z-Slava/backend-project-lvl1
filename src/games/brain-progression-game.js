import readlineSync from 'readline-sync';

import { showFailMessage } from '../cli.js';
import { getRandomNumber } from '../utils/index.js';

const showGameRules = () => {
  console.log('What number is missing in the progression?');
};

const getProgressionWithMissingElement = (start, step) => {
  const progressionStartIndex = 0;
  const progressionEndIndex = 9;
  const progressionLength = progressionEndIndex + 1;

  const missingIndex = getRandomNumber(progressionStartIndex, progressionEndIndex);

  const generateProgression = (nextElement, acc) => {
    if (acc.length === progressionLength) {
      return acc;
    }
    return generateProgression(nextElement + step, [...acc, nextElement]);
  };

  const progression = generateProgression(start, []);
  const [missingElement] = progression.splice(missingIndex, 1, '..');
  return { missingElement, progression };
};

const playRound = () => {
  const minProgressionStartNumber = 1;
  const maxProgressionStartNumber = 10;
  const minProgressionStep = 2;
  const maxProgressionStep = 8;

  const progressionStart = getRandomNumber(minProgressionStartNumber, maxProgressionStartNumber);
  const progressionStep = getRandomNumber(minProgressionStep, maxProgressionStep);
  const { missingElement, progression } = getProgressionWithMissingElement(
    progressionStart,
    progressionStep,
  );

  console.log(`Question: ${progression.join(' ')}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = String(missingElement);

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
