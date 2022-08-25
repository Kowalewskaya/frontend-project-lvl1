#!/usr/bin/env node

import { getUserName, generateGreeting } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const uName = getUserName();
console.log(generateGreeting(uName));
