import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }

  return String(value);
};

const toPlain = (keySpecs, ancestry = '') => keySpecs
  .map((key) => {
    const name = ancestry ? `${ancestry}.${key.name}` : `${key.name}`;

    const { initialValue, finalValue } = key;
    const initial = stringify(initialValue);
    const final = stringify(finalValue);

    switch (key.state) {
      case 'unsettled':
        return toPlain(key.spec, name);
      case 'added':
        return `Property '${name}' was added with value: ${initial}`;
      case 'deleted':
        return `Property '${name}' was removed`;
      case 'changed':
        return `Property '${name}' was updated. From ${initial} to ${final}`;
      default:
        return '';
    }
  })
  .filter((line) => !!line)
  .join('\n');

export default toPlain;
