import toStylish from './stylish.js';

export default (diff, format) => {
  if (format === 'plain') {
    // return toPlain(diff);
  }

  return toStylish(diff);
};
