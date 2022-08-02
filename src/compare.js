import _ from 'lodash';

export default (object1, object2) => {
  const result = [];

  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  keys1.forEach((key) => {
    const spec = { name: key, initialValue: object1[key] };
    result.push(spec);

    if (!keys2.includes(key)) {
      spec.state = 'deleted';
    } else if (object1[key] === object2[key]) {
      spec.state = 'unchanged';
    } else {
      spec.state = 'changed';
      spec.finalValue = object2[key];
    }
  });

  const added = _.difference(keys2, keys1);

  added.forEach((key) => {
    const spec = { name: key, state: 'added', initialValue: object2[key] };
    result.push(spec);
  });

  return _.sortBy(result, 'name');
};
