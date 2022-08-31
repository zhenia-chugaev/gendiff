/* eslint-env jest */

import readFixture from '../../src/fixture.js';
import process from '../../src/process.js';

let json0;
let json1;
let json2;
let json3;
let json4;

let yaml0;
let yaml1;
let yaml2;
let yaml3;
let yaml4;
let yaml5;

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
    json0 = { content: '{}', extension: '.json' };
    json1 = { content: readFixture('json/file1.json'), extension: '.json' };
    json2 = { content: readFixture('json/file2.json'), extension: '.json' };
    json3 = { content: readFixture('json/file3.json'), extension: '.json' };
    json4 = { content: readFixture('json/file4.json'), extension: '.json' };
  });

  test('stylish format', () => {
    expect(process(json1, json2)).toBe(result1);
    expect(process(json3, json4, 'stylish')).toBe(result2);
  });

  test('plain format', () => {
    expect(process(json1, json2, 'plain')).toBe(result6);
    expect(process(json4, json3, 'plain')).toBe(result7);
    expect(process(json3, json3, 'plain')).toBe('');
  });

  test('comparing with empty structure', () => {
    expect(process(json0, json0)).toBe('{}');
    expect(process(json0, json0, 'plain')).toBe('');
    expect(process(json0, json4)).toBe(result4);
  });
});

describe('yaml files testing', () => {
  beforeAll(() => {
    yaml0 = { content: '', extension: '.yml' };
    yaml1 = { content: readFixture('yaml/file1.yaml'), extension: '.yaml' };
    yaml2 = { content: readFixture('yaml/file2.yml'), extension: '.yml' };
    yaml3 = { content: readFixture('yaml/file3.yml'), extension: '.yml' };
    yaml4 = { content: readFixture('yaml/file4.yaml'), extension: '.yaml' };
    yaml5 = { content: 'a: 1', extension: '.yaml' };
  });

  test('stylish format', () => {
    expect(process(yaml1, yaml2)).toBe(result1);
    expect(process(yaml3, yaml4)).toBe(result2);
    expect(process(yaml4, yaml4)).toBe(result3);
  });

  test('plain format', () => {
    expect(process(yaml1, yaml2, 'plain')).toBe(result6);
    expect(process(yaml4, yaml3, 'plain')).toBe(result7);
  });

  test('json format', () => {
    expect(process(yaml0, yaml5, 'json')).toBe(result8);
  });

  test('comparing with empty structure', () => {
    expect(process(yaml0, yaml0)).toBe('{}');
    expect(process(yaml0, yaml0, 'plain')).toBe('');
    expect(process(yaml3, yaml0, 'stylish')).toBe(result5);
  });
});
