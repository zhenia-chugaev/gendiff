import YAML from 'yaml';

export default (fileInfo) => {
  const { extension, content } = fileInfo;

  if (extension === '.yml' || extension === '.yaml') {
    return YAML.parse(content);
  }

  return JSON.parse(content);
};
