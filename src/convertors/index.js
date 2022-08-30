import toStylish from './stylish.js';
import toPlain from './plain.js';

export default (diff, format) => {
  if (format === 'plain') {
    return toPlain(diff);
  }

  return toStylish(diff);
};
