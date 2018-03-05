
const { twoFer } = require('./two-fer');

describe('Two Fer', function () {
  it('gives one to you if no parameter given', function () {
    expect(twoFer()).toEqual('One for you, one for me.');
  });

  it('gives one to Alice if \'Alice\' is given', function () {
    expect(twoFer('Alice')).toEqual('One for Alice, one for me.');
  });

  it('gives one to Bob if \'Bob\' is given', function () {
    expect(twoFer('Bob')).toEqual('One for Bob, one for me.');
  });
});
