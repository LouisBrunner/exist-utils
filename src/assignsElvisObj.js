import exists from './exists';

export const assignsElvisObj = (obj, prop, value) => {
  if (!exists(obj[prop])) {
    obj[prop] = value;
  }
};

export const eqelo = assignsElvisObj;
