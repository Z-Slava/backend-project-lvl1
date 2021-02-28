import generateSimpleGame from './simple-game.js';

const showGameRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const isEven = (number) => number % 2 === 0;

const getCorrectAnswer = (number) => {
  const booleanAnswer = isEven(number);
  return booleanAnswer === true ? 'yes' : 'no';
};

const minNumber = 1;
const maxNumber = 25;

const playRound = generateSimpleGame(minNumber, maxNumber, getCorrectAnswer);

const game = {
  showGameRules,
  playRound,
};

export default game;
