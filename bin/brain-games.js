#!/usr/bin/env node
import { requestUserName } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const userName = requestUserName();
console.log(`Hello, ${userName}!`);
