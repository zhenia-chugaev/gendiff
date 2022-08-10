/* eslint-env jest */

import readFixture from '../../src/fixture.js';
import { process } from '../../src/gendiff.js';

let string1;
let string2;

let result1;
let result2;
let result3;

beforeAll(() => {
  string1 = readFixture('file1.json');
  string2 = readFixture('file2.json');

  result1 = readFixture('result1');
  result2 = readFixture('result2');
  result3 = readFixture('result3');
});

test('flat json files', () => {
  expect(process(string1, string2)).toBe(result1);
  expect(process(string2, string2)).toBe(result2);
  expect(process(string2, string1)).toBe(result3);
  expect(process('{}', '{}')).toBe('{}');
});
