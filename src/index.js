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
  const isGameSuccessful = game.playGame(numberOfRounds);

  if (isGameSuccessful) {
    showCongratMessage(name);
  } else {
    showRetryMessage(name);
  }
};

export default playGame;
