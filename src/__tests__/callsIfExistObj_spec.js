import { callsIfExistObj, fnexo } from '../callsIfExistObj';

describe('callsIfExistObj function', () => {
  test('calls the function (obj & func exist)', () => {
    const obj = {};
    const func = jest.fn().mockImplementation(function spy() {
      expect(this).toBe(obj);
      return 42;
    });
    obj.func = func;
    expect(callsIfExistObj(obj, 'func', 'abc', {})).toBe(42);
    expect(func).toHaveBeenCalledWith('abc', {});
  });

  test('does nothing (func doesn\'t exist)', () => {
    const obj = {};
    const func = jest.fn().mockImplementation(() => {
      expect(this).toBe(obj);
      return 42;
    });
    obj.func2 = func;
    expect(callsIfExistObj(obj, 'func', 'abc', {})).toBeUndefined();
    expect(func).not.toHaveBeenCalled();
  });

  test('does nothing (obj doesn\'t exist)', () => {
    expect(callsIfExistObj(undefined, 'func', 'abc', {})).toBeUndefined();
  });

  test('has a shortcut (fnexo)', () => {
    expect(fnexo).toBe(callsIfExistObj);
  });
});
