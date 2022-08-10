import { readFileSync } from 'fs';
import compare from './compare.js';
import convert from './convert.js';

const process = (string1, string2) => {
  const object1 = JSON.parse(string1);
  const object2 = JSON.parse(string2);
  const diff = compare(object1, object2);
  return convert(diff);
};

export default (filepath1, filepath2) => {
  const string1 = readFileSync(filepath1, 'utf8');
  const string2 = readFileSync(filepath2, 'utf8');
  const result = process(string1, string2);
  return result;
};

export { process };
