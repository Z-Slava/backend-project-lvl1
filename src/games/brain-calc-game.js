import readlineSync from 'readline-sync';

import { showWelcomeMessage, askUserName, greetUserByName } from '../cli.js';
import { getRandomNumber, getRandomOperation } from '../utils/index.js';

const getCorrectAnswer = (number1, number2, operation) => {
  const mapping = {
    '+': number1 + number2,
    '-': number1 - number2,
    '*': number1 * number2,
  };

  return mapping[operation];
};

const showFailMessage = (userAnswer, correctAnswer) => {
  console.log(
    `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`,
  );
};

const playRound = () => {
  const minNumber = 1;
  const maxNumber = 25;
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

const playGame = () => {
  const numberOfRounds = 3;
  let isRoundSuccessful = true;

  showWelcomeMessage();

  const name = askUserName();
  greetUserByName(name);

  console.log('What is the result of the expression?');

  for (
    let i = 0;
    i < numberOfRounds && isRoundSuccessful === true;
    i += 1
  ) {
    isRoundSuccessful = playRound();
  }

  if (isRoundSuccessful) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default playGame;
