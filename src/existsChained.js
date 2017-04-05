import exists from './exists';
import existsChainedValue from './existsChainedValue';

export const existsChained = (obj, ...props) => {
  return exists(existsChainedValue(obj, ...props));
};

export const exc = existsChained;
