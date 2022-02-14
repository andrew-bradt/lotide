const countLetters = require('../countLetters');
const {assert} = require('chai');

describe('#countLetters', ()=>{
  const string = '      AAAA BBB CcC dD EE  ';
  const count = countLetters(string);
  it("count['a'] should return 4", ()=>{
    const actual = count['a'];
    const expected = 4;
    assert.strictEqual(actual, expected);
  });
  it("count['b'] should return 3", ()=>{
    const actual = count['b'];
    const expected = 3;
    assert.strictEqual(actual, expected);
  });
  it("count['b'] should return 3", ()=>{
    const actual = count['b'];
    const expected = 3;
    assert.strictEqual(actual, expected);
  });
  it("count['c'] should return 3", ()=>{
    const actual = count['c'];
    const expected = 3;
    assert.strictEqual(actual, expected);
  });
  it("count['d'] should return 2", ()=>{
    const actual = count['d'];
    const expected = 2;
    assert.strictEqual(actual, expected);
  });
  it("count['e'] should return 2", ()=>{
    const actual = count['e'];
    const expected = 2;
    assert.strictEqual(actual, expected);
  });
  it("count['f'] should return undefined", ()=>{
    const actual = count['f'];
    assert.isUndefined(actual);
  });
});