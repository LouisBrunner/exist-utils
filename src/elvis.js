import exists from './exists';

export const elvis = (value, def) => {
  return exists(value) ? value : def;
};

export const el = elvis;
