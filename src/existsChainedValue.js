import exists from './exists';

export const existsChainedValue = (obj, ...props) => {
  if (!exists(obj)) {
    return undefined;
  }
  let value = obj;
  for (const prop of props) {
    value = value[prop];
    if (!exists(value)) {
      return undefined;
    }
  }
  return value;
};

export const excv = existsChainedValue;
