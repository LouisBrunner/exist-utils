import * as ExistUtils from '../index';

describe('ExistUtils module', () => {
  test('defines all the expected functions', () => {
    expect(ExistUtils.assignsElvisObj).toBeInstanceOf(Function);
    expect(ExistUtils.eqelo).toBeInstanceOf(Function);

    expect(ExistUtils.callsIfExist).toBeInstanceOf(Function);
    expect(ExistUtils.fnex).toBeInstanceOf(Function);

    expect(ExistUtils.callsIfExistObj).toBeInstanceOf(Function);
    expect(ExistUtils.fnexo).toBeInstanceOf(Function);

    expect(ExistUtils.elvis).toBeInstanceOf(Function);
    expect(ExistUtils.el).toBeInstanceOf(Function);

    expect(ExistUtils.exists).toBeInstanceOf(Function);
    expect(ExistUtils.ex).toBeInstanceOf(Function);

    expect(ExistUtils.existsChained).toBeInstanceOf(Function);
    expect(ExistUtils.exc).toBeInstanceOf(Function);

    expect(ExistUtils.existsChainedValue).toBeInstanceOf(Function);
    expect(ExistUtils.excv).toBeInstanceOf(Function);
  });
});
