import { existsChained, exc } from '../existsChained';

describe('existsChained function', () => {
  test('has no object', () => {
    expect(existsChained(undefined, 'a', 'b')).toBe(false);
  });

  test('found (1 prop)', () => {
    const obj = {a: 1};
    expect(existsChained(obj, 'a')).toBe(true);
  });

  test('not found (1 prop)', () => {
    const obj = {b: 1};
    expect(existsChained(obj, 'a')).toBe(false);
  });

  test('found (2 props)', () => {
    const obj = {a: {b: 2}};
    expect(existsChained(obj, 'a', 'b')).toBe(true);
  });

  test('not found (2 props)', () => {
    const obj = {a: {c: 2}};
    expect(existsChained(obj, 'a', 'b')).toBe(false);
  });

  test('found (3 props)', () => {
    const obj = {a: {b: {c: 3}}};
    expect(existsChained(obj, 'a', 'b', 'c')).toBe(true);
  });

  test('not found (3 props)', () => {
    const obj = {a: {b: {b: 3}}};
    expect(existsChained(obj, 'a', 'b', 'c')).toBe(false);
  });

  test('has a shortcut (exc)', () => {
    expect(exc).toBe(existsChained);
  });
});
