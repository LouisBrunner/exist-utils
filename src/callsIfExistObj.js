import isFunction from 'lodash/isFunction';
import { exists } from './exists';

export const callsIfExistObj = (obj, func, ...args) => {
  if (exists(obj) && exists(func) && isFunction(obj[func])) {
    return obj[func](...args);
  }
};

export const fnexo = callsIfExistObj;
