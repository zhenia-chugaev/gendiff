import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getAbsolutePath = (fixturePath) => {
  const path = join(__dirname, '..', '__fixtures__', fixturePath);
  return path;
};

const readFixture = (fixturePath) => {
  const path = getAbsolutePath(fixturePath);
  return readFileSync(path, 'utf8');
};

export default readFixture;
