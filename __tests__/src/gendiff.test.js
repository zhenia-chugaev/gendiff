/* eslint-env jest */

import readFixture from '../../src/fixture.js';
import { process } from '../../src/gendiff.js';

let json1;
let json2;
let yaml1;
let yaml2;

let result1;
let result2;
let result3;

beforeAll(() => {
  json1 = readFixture('file1.json');
  json2 = readFixture('file2.json');
  yaml1 = readFixture('file1.yml');
  yaml2 = readFixture('file2.yaml');

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

describe('yaml files testing', () => {
  test('flat structures', () => {
    expect(process(yaml1, yaml2)).toBe(result1);
    expect(process(yaml2, yaml2)).toBe(result2);
    expect(process(yaml2, yaml1)).toBe(result3);
    expect(process('', '')).toBe('{}');
  });
});
