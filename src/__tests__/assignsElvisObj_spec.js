import { assignsElvisObj, eqelo } from '../assignsElvisObj';

describe('assignsElvisObj function', () => {
  test('assigns a value (no prop)', () => {
    const obj = {};
    assignsElvisObj(obj, 'hello', 123);
    expect(obj.hello).toBe(123);
  });

  test('assigns a value (has prop)', () => {
    const obj = {hello: 'abc'};
    assignsElvisObj(obj, 'hello', 123);
    expect(obj.hello).toBe('abc');
  });

  test('has a shortcut (eqelo)', () => {
    expect(eqelo).toBe(assignsElvisObj);
  });
});
