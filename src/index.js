import {
  showWelcomeMessage,
  askUserName,
  greetUserByName,
  showCongratMessage,
  showRetryMessage,
} from './cli.js';

const numberOfRounds = 3;

const playGame = (game) => {
  showWelcomeMessage();

  const name = askUserName();
  greetUserByName(name);

  game.showGameRules();

  let isRoundSuccessful = true;
  for (let i = 0; i < numberOfRounds && isRoundSuccessful === true; i += 1) {
    isRoundSuccessful = game.playRound();
  }

  if (isRoundSuccessful) {
    showCongratMessage(name);
  } else {
    showRetryMessage(name);
  }
};

export default playGame;
