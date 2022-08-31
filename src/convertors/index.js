import toStylish from './stylish.js';
import toPlain from './plain.js';
import toJSON from './json.js';

export default (diff, format) => {
  if (format === 'plain') {
    return toPlain(diff);
  }
  if (format === 'json') {
    return toJSON(diff);
  }

  return toStylish(diff);
};
