import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (fixtureName) => {
  const relativePath = `../__fixtures__/${fixtureName}`;
  return resolve(__dirname, relativePath);
};

const readFixture = (fixtureName) => {
  const path = getFixturePath(fixtureName);
  return readFileSync(path, 'utf8');
};

export default readFixture;
