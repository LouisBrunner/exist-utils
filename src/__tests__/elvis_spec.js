import { elvis, el } from '../elvis';

describe('elvis function', () => {
  test('returns the first value ({})', () => {
    const obj = {secret: Math.random()};
    expect(elvis(obj, 'hello')).toBe(obj);
  });

  test('returns the first value ("")', () => {
    expect(elvis('', 'hello')).toBe('');
  });

  test('returns the first value (0)', () => {
    expect(elvis(0, 'hello')).toBe(0);
  });

  test('returns the first value (false)', () => {
    expect(elvis(false, 'hello')).toBe(false);
  });

  test('returns the second value (undefined)', () => {
    expect(elvis(undefined, 'hello')).toBe('hello');
  });

  test('returns the second value (null)', () => {
    expect(elvis(null, 'hello')).toBe('hello');
  });

  test('has a shortcut (el)', () => {
    expect(el).toBe(elvis);
  });
});
