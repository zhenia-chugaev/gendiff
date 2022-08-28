#!/usr/bin/env node

import { program } from 'commander';
import genDiff from '../src/gendiff.js';

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.1.0')
  .option('-f, --format <type>', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>');

program.action((arg1, arg2, { format }) => {
  const output = genDiff(arg1, arg2, format);
  console.log(output);
});

program.parse();
