import { expect } from 'tests/framework';

import { existsChained, exc } from '../existsChained';

describe('existsChained function', () => {
  it('has no object', () => {
    expect(existsChained(undefined, 'a', 'b')).to.equal(false);
  });

  it('found (1 prop)', () => {
    const obj = {a: 1};
    expect(existsChained(obj, 'a')).to.equal(true);
  });

  it('not found (1 prop)', () => {
    const obj = {b: 1};
    expect(existsChained(obj, 'a')).to.equal(false);
  });

  it('found (2 props)', () => {
    const obj = {a: {b: 2}};
    expect(existsChained(obj, 'a', 'b')).to.equal(true);
  });

  it('not found (2 props)', () => {
    const obj = {a: {c: 2}};
    expect(existsChained(obj, 'a', 'b')).to.equal(false);
  });

  it('found (3 props)', () => {
    const obj = {a: {b: {c: 3}}};
    expect(existsChained(obj, 'a', 'b', 'c')).to.equal(true);
  });

  it('not found (3 props)', () => {
    const obj = {a: {b: {b: 3}}};
    expect(existsChained(obj, 'a', 'b', 'c')).to.equal(false);
  });

  it('has a shortcut (exc)', () => {
    expect(exc).to.equal(existsChained);
  });
});
