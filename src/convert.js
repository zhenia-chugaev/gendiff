import _ from 'lodash';

const INDENT_SIZE = 4;

const stringify = (data, depth) => {
  if (!_.isObject(data)) {
    return String(data);
  }

  const indent = ' '.repeat(INDENT_SIZE * depth);

  const inner = Object.keys(data)
    .map((key) => {
      const value = data[key];
      const string = _.isObject(value)
        ? stringify(value, depth + 1)
        : value;
      const line = `${key}: ${string}`;
      return line.padStart(line.length + INDENT_SIZE, ' ');
    })
    .join(`\n${indent}`);

  return !inner ? '{}' : `{\n${indent}${inner}\n${indent}}`;
};

const convert = (keySpecs, depth = 0) => {
  const indent = ' '.repeat(INDENT_SIZE * depth);

  const inner = keySpecs
    .flatMap((key) => {
      const value = (key.state === 'unsettled')
        ? convert(key.spec, depth + 1)
        : stringify(key.initialValue, depth + 1);

      const line = `${key.name}: ${value}`;

      switch (key.state) {
        case 'added':
          return `+ ${line}`;
        case 'deleted':
          return `- ${line}`;
        case 'changed':
          return [
            `- ${line}`,
            `+ ${key.name}: ${stringify(key.finalValue, depth + 1)}`,
          ];
        default:
          return `  ${line}`;
      }
    })
    .map((line) => line.padStart(line.length + 2, ' '))
    .join(`\n${indent}`);

  return !inner ? '{}' : `{\n${indent}${inner}\n${indent}}`;
};

export default convert;
