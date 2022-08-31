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

let results;

beforeAll(() => {
  results = readFixture('results').split('\n\n\n');
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
    expect(process(json1, json2)).toBe(results[0]);
    expect(process(json3, json4, 'stylish')).toBe(results[1]);
  });

  test('plain format', () => {
    expect(process(json1, json2, 'plain')).toBe(results[5]);
    expect(process(json4, json3, 'plain')).toBe(results[6]);
    expect(process(json3, json3, 'plain')).toBe('');
  });

  test('comparing with empty structure', () => {
    expect(process(json0, json0)).toBe('{}');
    expect(process(json0, json0, 'plain')).toBe('');
    expect(process(json0, json4)).toBe(results[3]);
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
    expect(process(yaml1, yaml2)).toBe(results[0]);
    expect(process(yaml3, yaml4)).toBe(results[1]);
    expect(process(yaml4, yaml4)).toBe(results[2]);
  });

  test('plain format', () => {
    expect(process(yaml1, yaml2, 'plain')).toBe(results[5]);
    expect(process(yaml4, yaml3, 'plain')).toBe(results[6]);
  });

  test('json format', () => {
    expect(process(yaml0, yaml5, 'json')).toBe(results[7]);
  });

  test('comparing with empty structure', () => {
    expect(process(yaml0, yaml0)).toBe('{}');
    expect(process(yaml0, yaml0, 'plain')).toBe('');
    expect(process(yaml3, yaml0, 'stylish')).toBe(results[4]);
  });
});
