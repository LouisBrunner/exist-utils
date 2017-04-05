import { expect } from 'tests/framework';

import { existsChainedValue, excv } from '../existsChainedValue';

describe('existsChainedValue function', () => {
  it('has no object', () => {
    expect(existsChainedValue(undefined, 'a', 'b')).to.equal(undefined);
  });

  it('found (1 prop)', () => {
    const obj = {a: 1};
    expect(existsChainedValue(obj, 'a')).to.equal(1);
  });

  it('not found (1 prop)', () => {
    const obj = {b: 1};
    expect(existsChainedValue(obj, 'a')).to.equal(undefined);
  });

  it('found (2 props)', () => {
    const obj = {a: {b: 2}};
    expect(existsChainedValue(obj, 'a', 'b')).to.equal(2);
  });

  it('not found (2 props)', () => {
    const obj = {a: {c: 2}};
    expect(existsChainedValue(obj, 'a', 'b')).to.equal(undefined);
  });

  it('found (3 props)', () => {
    const obj = {a: {b: {c: 3}}};
    expect(existsChainedValue(obj, 'a', 'b', 'c')).to.equal(3);
  });

  it('not found (3 props)', () => {
    const obj = {a: {b: {b: 3}}};
    expect(existsChainedValue(obj, 'a', 'b', 'c')).to.equal(undefined);
  });

  it('has a shortcut (excv)', () => {
    expect(excv).to.equal(existsChainedValue);
  });
});
