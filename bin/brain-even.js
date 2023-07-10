#!/usr/bin/env node
import { requestUserName, requestAnswer } from '../src/cli.js';

const MAX_NUMBER = 100;
const NUMBER_OF_ROUNDS = 3;
const POSITIVE_ANSWER = 'yes';
const NEGATIVE_ANSWER = 'no';

const generateRandomNumber = () => Math.floor(Math.random() * (MAX_NUMBER + 1));
const isEven = (number) => number % 2 === 0;
const getCorrectAnswer = (number) => (isEven(number) ? POSITIVE_ANSWER : NEGATIVE_ANSWER);

const createUserBasedMessages = (userName) => ({
  printWelcomeMessage: () => console.log(`Hello, ${userName}!`),
  printTryAgainMessage: () => console.log(`Let's try again, ${userName}!`),
  printCongratulationMessage: () => console.log(`Congratulations, ${userName}!`),
});

const playBrainEvenGame = (numberOfRounds) => {
  let isPlayerWinner = false;

  for (let i = 0; i < numberOfRounds; i += 1) {
    const randomNumber = generateRandomNumber();
    console.log(`Question: ${randomNumber}`);
    const answer = requestAnswer();
    const correctAnswer = getCorrectAnswer(randomNumber);

    if (String(correctAnswer) !== String(answer)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      isPlayerWinner = false;
      break;
    }

    console.log('Correct!');
    isPlayerWinner = true;
  }

  return isPlayerWinner;
};

console.log('Welcome to the Brain Games!');
const userName = requestUserName();
const userBasedMessages = createUserBasedMessages(userName);
userBasedMessages.printWelcomeMessage();

console.log('Answer "yes" if the number is even, otherwise answer "no".');
const isPlayerWinner = playBrainEvenGame(NUMBER_OF_ROUNDS);

if (isPlayerWinner) {
  userBasedMessages.printCongratulationMessage();
} else {
  userBasedMessages.printTryAgainMessage();
}
