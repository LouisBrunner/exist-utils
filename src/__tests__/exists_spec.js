/* eslint-disable no-unused-expressions */
import { expect } from 'tests/framework';

import { exists, ex } from '../exists';

describe('elvis function', () => {
  it('is true with something ({})', () => {
    const obj = {secret: Math.random()};
    expect(exists(obj)).to.equal(true);
  });

  it('is true with something ("")', () => {
    expect(exists('')).to.equal(true);
  });

  it('is true with something (0)', () => {
    expect(exists(0)).to.equal(true);
  });

  it('is true with something (false)', () => {
    expect(exists(false)).to.equal(true);
  });

  it('is false with nothing (undefined)', () => {
    expect(exists(undefined)).to.equal(false);
  });

  it('is false with nothing (null)', () => {
    expect(exists(null)).to.equal(false);
  });

  it('has a shortcut (ex)', () => {
    expect(ex).to.equal(exists);
  });
});
