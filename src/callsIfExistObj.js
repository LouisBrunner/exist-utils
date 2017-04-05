import isFunction from 'lodash/isFunction';
import { exists } from './exists';

export const callsIfExistObj = (obj, func, ...args) => {
  if (exists(obj) && exists(func) && isFunction(obj[func])) {
    return obj[func].apply(obj, args);
  }
};

export const fnexo = callsIfExistObj;
