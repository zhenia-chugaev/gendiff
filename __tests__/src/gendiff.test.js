/* eslint-env jest */

import readFixture from '../../src/fixture.js';
import { process } from '../../src/gendiff.js';

let json1;
let json2;
let json3;
let yaml1;
let yaml2;
let yaml3;

let result1;
let result2;
let result3;

beforeAll(() => {
  json1 = { content: readFixture('file1.json'), extension: '.json' };
  json2 = { content: readFixture('file2.json'), extension: '.json' };
  json3 = { content: '{}', extension: '.json' };
  yaml1 = { content: readFixture('file1.yml'), extension: '.yml' };
  yaml2 = { content: readFixture('file2.yaml'), extension: '.yaml' };
  yaml3 = { content: '', extension: '.yml' };

  result1 = readFixture('result1');
  result2 = readFixture('result2');
  result3 = readFixture('result3');
});

describe('json files testing', () => {
  test('flat structures', () => {
    expect(process(json1, json2)).toBe(result1);
    expect(process(json2, json2)).toBe(result2);
    expect(process(json2, json1)).toBe(result3);
    expect(process(json3, json3)).toBe('{}');
  });
});

describe('yaml files testing', () => {
  test('flat structures', () => {
    expect(process(yaml1, yaml2)).toBe(result1);
    expect(process(yaml2, yaml2)).toBe(result2);
    expect(process(yaml2, yaml1)).toBe(result3);
    expect(process(yaml3, yaml3)).toBe('{}');
  });
});
