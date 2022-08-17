import { extname } from 'path';
import { readFileSync } from 'fs';
import process from './process.js';

const read = (filepath) => {
  const extension = extname(filepath);
  const content = readFileSync(filepath, 'utf8');
  return { extension, content };
};

export default (filepath1, filepath2) => {
  const file1 = read(filepath1);
  const file2 = read(filepath2);
  const result = process(file1, file2);
  return result;
};
