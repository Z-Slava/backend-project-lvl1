import generateSimpleGame from './simple-game.js';

const showGameRules = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getCorrectAnswer = (number) => (isPrime(number) ? 'yes' : 'no');

const minNumber = 1;
const maxNumber = 100;

const playRound = generateSimpleGame(minNumber, maxNumber, getCorrectAnswer);

const game = {
  showGameRules,
  playRound,
};

export default game;
