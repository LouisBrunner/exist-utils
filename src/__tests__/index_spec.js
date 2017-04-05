import { expect } from 'tests/framework';

import * as ExistUtils from '../index';

describe('ExistUtils module', () => {
  it('defines all the expected functions', () => {
    expect(ExistUtils.assignsElvisObj).to.be.an.instanceof(Function);
    expect(ExistUtils.eqelo).to.be.an.instanceof(Function);

    expect(ExistUtils.callsIfExist).to.be.an.instanceof(Function);
    expect(ExistUtils.fnex).to.be.an.instanceof(Function);

    expect(ExistUtils.callsIfExistObj).to.be.an.instanceof(Function);
    expect(ExistUtils.fnexo).to.be.an.instanceof(Function);

    expect(ExistUtils.elvis).to.be.an.instanceof(Function);
    expect(ExistUtils.el).to.be.an.instanceof(Function);

    expect(ExistUtils.exists).to.be.an.instanceof(Function);
    expect(ExistUtils.ex).to.be.an.instanceof(Function);

    expect(ExistUtils.existsChained).to.be.an.instanceof(Function);
    expect(ExistUtils.exc).to.be.an.instanceof(Function);

    expect(ExistUtils.existsChainedValue).to.be.an.instanceof(Function);
    expect(ExistUtils.excv).to.be.an.instanceof(Function);
  });
});
