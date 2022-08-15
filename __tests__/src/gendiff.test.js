/* eslint-env jest */

import readFixture from '../../src/fixture.js';
import { process } from '../../src/gendiff.js';

let json1;
let json2;

let result1;
let result2;
let result3;

beforeAll(() => {
  json1 = readFixture('file1.json');
  json2 = readFixture('file2.json');

  result1 = readFixture('result1');
  result2 = readFixture('result2');
  result3 = readFixture('result3');
});

describe('json files testing', () => {
  test('flat structures', () => {
    expect(process(json1, json2)).toBe(result1);
    expect(process(json2, json2)).toBe(result2);
    expect(process(json2, json1)).toBe(result3);
    expect(process('{}', '{}')).toBe('{}');
  });
});
