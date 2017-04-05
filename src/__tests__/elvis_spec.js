/* eslint-disable no-unused-expressions */
import { expect } from 'tests/framework';

import { elvis, el } from '../elvis';

describe('elvis function', () => {
  it('returns the first value ({})', () => {
    const obj = {secret: Math.random()};
    expect(elvis(obj, 'hello')).to.equal(obj);
  });

  it('returns the first value ("")', () => {
    expect(elvis('', 'hello')).to.equal('');
  });

  it('returns the first value (0)', () => {
    expect(elvis(0, 'hello')).to.equal(0);
  });

  it('returns the first value (false)', () => {
    expect(elvis(false, 'hello')).to.equal(false);
  });

  it('returns the second value (undefined)', () => {
    expect(elvis(undefined, 'hello')).to.equal('hello');
  });

  it('returns the second value (null)', () => {
    expect(elvis(null, 'hello')).to.equal('hello');
  });

  it('has a shortcut (el)', () => {
    expect(el).to.equal(elvis);
  });
});
