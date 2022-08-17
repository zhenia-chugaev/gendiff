import { extname } from 'path';
import { readFileSync } from 'fs';
import YAML from 'yaml';
import compare from './compare.js';
import convert from './convert.js';

const read = (filepath) => {
  const extension = extname(filepath);
  const content = readFileSync(filepath, 'utf8');
  return { extension, content };
};

const parse = ({ content, extension }) => {
  if (extension === '.yml' || extension === '.yaml') {
    return YAML.parse(content);
  }

  return JSON.parse(content);
};

const process = (file1, file2) => {
  const object1 = parse(file1);
  const object2 = parse(file2);
  const diff = compare(object1, object2);
  return convert(diff);
};

export default (filepath1, filepath2) => {
  const file1 = read(filepath1);
  const file2 = read(filepath2);
  const result = process(file1, file2);
  return result;
};

export { process };
