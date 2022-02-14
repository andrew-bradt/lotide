const {assert} = require('chai');
const middle = require('../middle');

describe('#middle', ()=>{
  it('[1, 2, 3] should return [2]', ()=>{
    const actual = middle([1, 2, 3]);
    const expected = [2];
    assert.sameOrderedMembers(actual, expected);
  });
  it('[1, 2, 3, 4] should return [2, 3]', ()=>{
    const actual = middle([1, 2, 3, 4]);
    const expected = [2, 3];
    assert.sameOrderedMembers(actual, expected);
  });
  it('[1] should return []', ()=>{
    const actual = middle([1]);
    const expected = [];
    assert.sameOrderedMembers(actual, expected);
  });
  it("Shouldn't mutate the original array", ()=>{
    const original = [1, 2, 3];
    const expected = [1, 2, 3];
    middle(original);
    assert.sameOrderedMembers(original, expected);
  });
});