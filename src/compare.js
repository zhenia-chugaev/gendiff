import _ from 'lodash';

const makeSpecification = (key, value) => ({
  name: key,
  initialValue: value,
  state: 'unsettled',
  finalValue: null,
  spec: null,
});

const compare = (arg1, arg2) => {
  const object1 = !arg1 ? {} : arg1;
  const object2 = !arg2 ? {} : arg2;

  const result = [];

  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  keys1.forEach((key) => {
    const value1 = object1[key];
    const value2 = object2[key];
    const spec = makeSpecification(key, value1);
    result.push(spec);

    if (!keys2.includes(key)) {
      spec.state = 'deleted';
    } else if (_.isObject(value1) && _.isObject(value2)) {
      spec.spec = compare(value1, value2);
    } else if (value1 === value2) {
      spec.state = 'unchanged';
    } else {
      spec.state = 'changed';
      spec.finalValue = value2;
    }
  });

  const added = _.difference(keys2, keys1);

  added.forEach((key) => {
    const spec = makeSpecification(key, object2[key]);
    spec.state = 'added';
    result.push(spec);
  });

  return _.sortBy(result, 'name');
};

export default compare;
