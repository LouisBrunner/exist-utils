import { exists, ex } from '../exists';

describe('elvis function', () => {
  test('is true with something ({})', () => {
    const obj = {secret: Math.random()};
    expect(exists(obj)).toBe(true);
  });

  test('is true with something ("")', () => {
    expect(exists('')).toBe(true);
  });

  test('is true with something (0)', () => {
    expect(exists(0)).toBe(true);
  });

  test('is true with something (false)', () => {
    expect(exists(false)).toBe(true);
  });

  test('is false with nothing (undefined)', () => {
    expect(exists(undefined)).toBe(false);
  });

  test('is false with nothing (null)', () => {
    expect(exists(null)).toBe(false);
  });

  test('has a shortcut (ex)', () => {
    expect(ex).toBe(exists);
  });
});
