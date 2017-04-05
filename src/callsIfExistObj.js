import isFunction from 'lodash/isFunction';
import exists from './exists';

export const callsIfExistObj = (obj, func, ...args) => {
  if (exists(obj) && exists(func) && isFunction(func)) {
    return func.apply(obj, args);
  }
};

export const fnexo = callsIfExistObj;
