const SPACES_COUNT = 2;

export default (keySpecs) => {
  const inner = keySpecs
    .flatMap((key) => {
      const line = `${key.name}: ${key.initialValue}`;

      switch (key.state) {
        case 'added':
          return `+ ${line}`;
        case 'deleted':
          return `- ${line}`;
        case 'changed':
          return [
            `- ${line}`,
            `+ ${key.name}: ${key.finalValue}`,
          ];
        default:
          return `  ${line}`;
      }
    })
    .map((line) => line.padStart(line.length + SPACES_COUNT, ' '))
    .join('\n');

  return !inner ? '{}' : `{\n${inner}\n}`;
};
