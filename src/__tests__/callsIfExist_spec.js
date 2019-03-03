import { callsIfExist, fnex } from '../callsIfExist';

describe('callsIfExist function', () => {
  test('calls the function (exists)', () => {
    const func = jest.fn().mockReturnValueOnce(42);
    expect(callsIfExist(func, 'abc', {})).toBe(42);
    expect(func).toHaveBeenCalledWith('abc', {});
  });

  test('does nothing (doesn\'t exist)', () => {
    expect(callsIfExist(undefined)).toBeUndefined();
  });

  test('has a shortcut (fnex)', () => {
    expect(fnex).toBe(callsIfExist);
  });
});
