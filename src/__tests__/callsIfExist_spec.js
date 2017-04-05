/* eslint-disable no-unused-expressions */
import { expect, sinon } from 'tests/framework';

import { callsIfExist, fnex } from '../callsIfExist';

describe('callsIfExist function', () => {
  it('calls the function (exists)', () => {
    const func = sinon.stub().returns(42);
    expect(callsIfExist(func, 'abc', {})).to.equal(42);
    expect(func).to.have.been.calledOnce;
    expect(func).to.have.been.calledWithExactly('abc', {});
  });

  it('does nothing (doesn\'t exist)', () => {
    expect(callsIfExist(undefined)).to.be.undefined;
  });

  it('has a shortcut (fnex)', () => {
    expect(fnex).to.equal(callsIfExist);
  });
});
