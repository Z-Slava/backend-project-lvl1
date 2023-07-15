import runGame from './games/base.js';
import * as evenGame from './games/even.js';
import * as calcGame from './games/calc.js';
import * as gcdGame from './games/gcd.js';
import * as primeGame from './games/prime.js';
import * as progressionGame from './games/progression.js';

export const runIntroGame = () => runGame();
export const runEvenGame = () => runGame(evenGame.RULES, evenGame.getQuestionAndAnswer);
export const runCalcGame = () => runGame(calcGame.RULES, calcGame.getQuestionAndAnswer);
export const runGcdGame = () => runGame(gcdGame.RULES, gcdGame.getQuestionAndAnswer);
export const runPrimeGame = () => runGame(primeGame.RULES, primeGame.getQuestionAndAnswer);
export const runProgressionGame = () => runGame(
  progressionGame.RULES,
  progressionGame.getQuestionAndAnswer,
);
