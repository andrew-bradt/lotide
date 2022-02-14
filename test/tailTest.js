const {assert} = require('chai');
const tail = require('../tail');

describe('#tail', () =>{
  it('[1, 2, 3] should return [2, 3]', ()=>{
    const actual = tail([1, 2, 3]);
    const expected = [2, 3];
    assert.sameOrderedMembers(actual, expected);
  });
  it('[3] should return []', ()=>{
    const actual = tail([3]);
    const expected = [];
    assert.sameOrderedMembers(actual, expected);
  });
  it("Doesn't mutate the original array", () =>{
    const original = [1, 2, 3];
    tail(original);
    assert.sameOrderedMembers(original, [1, 2, 3]);
  });
});