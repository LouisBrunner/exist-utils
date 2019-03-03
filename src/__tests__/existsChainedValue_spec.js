import { existsChainedValue, excv } from '../existsChainedValue';

describe('existsChainedValue function', () => {
  test('has no object', () => {
    expect(existsChainedValue(undefined, 'a', 'b')).toBeUndefined();
  });

  test('found (1 prop)', () => {
    const obj = {a: 1};
    expect(existsChainedValue(obj, 'a')).toBe(1);
  });

  test('not found (1 prop)', () => {
    const obj = {b: 1};
    expect(existsChainedValue(obj, 'a')).toBeUndefined();
  });

  test('found (2 props)', () => {
    const obj = {a: {b: 2}};
    expect(existsChainedValue(obj, 'a', 'b')).toBe(2);
  });

  test('not found (2 props)', () => {
    const obj = {a: {c: 2}};
    expect(existsChainedValue(obj, 'a', 'b')).toBeUndefined();
  });

  test('found (3 props)', () => {
    const obj = {a: {b: {c: 3}}};
    expect(existsChainedValue(obj, 'a', 'b', 'c')).toBe(3);
  });

  test('not found (3 props)', () => {
    const obj = {a: {b: {b: 3}}};
    expect(existsChainedValue(obj, 'a', 'b', 'c')).toBeUndefined();
  });

  test('has a shortcut (excv)', () => {
    expect(excv).toBe(existsChainedValue);
  });
});
