import parse from './parse.js';
import compare from './compare.js';
import convert from './convert.js';

export default (file1, file2) => {
  const object1 = parse(file1);
  const object2 = parse(file2);
  const diff = compare(object1, object2);
  return convert(diff);
};
