import * as base from './games/base.js';
import * as evenGame from './games/even.js';
import * as calcGame from './games/calc.js';
import * as gcdGame from './games/gcd.js';
import * as primeGame from './games/prime.js';
import * as progressionGame from './games/progression.js';

export const runIntroGame = () => base.runGame();
export const runEvenGame = () => base.runGame(evenGame.RULES, evenGame.getQuestionAndAnswer);
export const runCalcGame = () => base.runGame(calcGame.RULES, calcGame.getQuestionAndAnswer);
export const runGcdGame = () => base.runGame(gcdGame.RULES, gcdGame.getQuestionAndAnswer);
export const runPrimeGame = () => base.runGame(primeGame.RULES, primeGame.getQuestionAndAnswer);
export const runProgressionGame = () => base.runGame(
  progressionGame.RULES,
  progressionGame.getQuestionAndAnswer,
);
