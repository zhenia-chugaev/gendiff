/* eslint-env jest */

import readFixture from '../../src/fixture.js';
import process from '../../src/process.js';

let json1;
let json2;
let json3;
let json4;
let json5;
let json6;
let json7;

let yaml1;
let yaml2;
let yaml3;
let yaml4;
let yaml5;
let yaml6;
let yaml7;

let result1;
let result2;
let result3;
let result4;
let result5;
let result6;
let result7;
let result8;

beforeAll(() => {
  result1 = readFixture('result1');
  result2 = readFixture('result2');
  result3 = readFixture('result3');
  result4 = readFixture('result4');
  result5 = readFixture('result5');
  result6 = readFixture('result6');
  result7 = readFixture('result7');
  result8 = readFixture('result8');
});

describe('json files testing', () => {
  beforeAll(() => {
    json1 = { content: readFixture('json/file1.json'), extension: '.json' };
    json2 = { content: readFixture('json/file2.json'), extension: '.json' };
    json3 = { content: readFixture('json/file3.json'), extension: '.json' };
    json4 = { content: readFixture('json/file4.json'), extension: '.json' };
    json5 = { content: readFixture('json/file5.json'), extension: '.json' };
    json6 = { content: readFixture('json/file6.json'), extension: '.json' };
    json7 = { content: '{}', extension: '.json' };
  });

  test('flat structures', () => {
    expect(process(json1, json2)).toBe(result1);
    expect(process(json2, json2)).toBe(result2);
    expect(process(json2, json1)).toBe(result3);
  });

  test('nested structures', () => {
    expect(process(json3, json4)).toBe(result4);
    expect(process(json5, json6)).toBe(result5);
    expect(process(json6, json6)).toBe(result6);
  });

  test('empty structures', () => {
    expect(process(json7, json7)).toBe('{}');
    expect(process(json7, json2)).toBe(result7);
  });
});

describe('yaml files testing', () => {
  beforeAll(() => {
    yaml1 = { content: readFixture('yaml/file1.yml'), extension: '.yml' };
    yaml2 = { content: readFixture('yaml/file2.yaml'), extension: '.yaml' };
    yaml3 = { content: readFixture('yaml/file3.yaml'), extension: '.yaml' };
    yaml4 = { content: readFixture('yaml/file4.yml'), extension: '.yml' };
    yaml5 = { content: readFixture('yaml/file5.yml'), extension: '.yml' };
    yaml6 = { content: readFixture('yaml/file6.yml'), extension: '.yml' };
    yaml7 = { content: '', extension: '.yml' };
  });

  test('flat structures', () => {
    expect(process(yaml1, yaml2)).toBe(result1);
    expect(process(yaml2, yaml2)).toBe(result2);
    expect(process(yaml2, yaml1)).toBe(result3);
  });

  test('nested structures', () => {
    expect(process(yaml3, yaml4)).toBe(result4);
    expect(process(yaml5, yaml6)).toBe(result5);
    expect(process(yaml6, yaml6)).toBe(result6);
  });

  test('empty structures', () => {
    expect(process(yaml7, yaml7)).toBe('{}');
    expect(process(yaml5, yaml7)).toBe(result8);
  });
});
