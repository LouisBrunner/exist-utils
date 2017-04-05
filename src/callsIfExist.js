import isFunction from 'lodash/isFunction';
import exists from './exists';

export const callsIfExist = (func, ...args) => {
  if (exists(func) && isFunction(func)) {
    return func(...args);
  }
};

export const fnex = callsIfExist;
