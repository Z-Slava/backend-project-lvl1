import readlineSync from 'readline-sync';

export const requestUserName = () => (readlineSync.question('May I have your name? '));
