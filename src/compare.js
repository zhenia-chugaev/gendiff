import _ from 'lodash';

const makeSpecification = (key, value) => ({
  name: key,
  initialValue: value,
  state: 'unsettled',
  finalValue: null,
  spec: null,
});

const assign = (object, attributes) => ({
  ...object,
  ...attributes,
});

const compare = (arg1, arg2) => {
  const object1 = !arg1 ? {} : arg1;
  const object2 = !arg2 ? {} : arg2;
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  const specs1 = keys1.map((key) => {
    const value1 = object1[key];
    const value2 = object2[key];
    const spec = makeSpecification(key, value1);

    if (!keys2.includes(key)) {
      return assign(spec, { state: 'deleted' });
    }
    if (_.isObject(value1) && _.isObject(value2)) {
      return assign(spec, { spec: compare(value1, value2) });
    }
    if (value1 === value2) {
      return assign(spec, { state: 'unchanged' });
    }

    return assign(spec, { state: 'changed', finalValue: value2 });
  });

  const added = _.difference(keys2, keys1);
  const specs2 = added.map((key) => {
    const spec = makeSpecification(key, object2[key]);
    return assign(spec, { state: 'added' });
  });

  const result = specs1.concat(specs2);
  return _.sortBy(result, 'name');
};

export default compare;
