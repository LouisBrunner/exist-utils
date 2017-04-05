/* eslint-disable no-unused-expressions */
import { expect } from 'tests/framework';

import { assignsElvisObj, eqelo } from '../assignsElvisObj';

describe('assignsElvisObj function', () => {
  it('assigns a value (no prop)', () => {
    const obj = {};
    assignsElvisObj(obj, 'hello', 123);
    expect(obj.hello).to.equal(123);
  });

  it('assigns a value (has prop)', () => {
    const obj = {hello: 'abc'};
    assignsElvisObj(obj, 'hello', 123);
    expect(obj.hello).to.equal('abc');
  });

  it('has a shortcut (eqelo)', () => {
    expect(eqelo).to.equal(assignsElvisObj);
  });
});
