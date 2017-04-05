/* eslint-disable no-unused-expressions */
import { expect, sinon } from 'tests/framework';

import { callsIfExistObj, fnexo } from '../callsIfExistObj';

describe('callsIfExistObj function', () => {
  it('calls the function (obj & func exist)', () => {
    const obj = {};
    const func = sinon.spy(function spy() {
      expect(this).to.equal(obj);
      return 42;
    });
    obj.func = func;
    expect(callsIfExistObj(obj, 'func', 'abc', {})).to.be.equal(42);
    expect(func).to.have.been.calledOnce;
    expect(func).to.have.been.calledWithExactly('abc', {});
  });

  it('does nothing (func doesn\'t exist)', () => {
    const obj = {};
    const func = sinon.spy(() => {
      expect(this).to.equal(obj);
      return 42;
    });
    obj.func2 = func;
    expect(callsIfExistObj(obj, 'func', 'abc', {})).to.be.undefined;
    expect(func).not.to.have.been.called;
  });

  it('does nothing (obj doesn\'t exist)', () => {
    expect(callsIfExistObj(undefined, 'func', 'abc', {})).to.be.undefined;
  });

  it('has a shortcut (fnexo)', () => {
    expect(fnexo).to.equal(callsIfExistObj);
  });
});
