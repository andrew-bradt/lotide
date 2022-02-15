const {assert} = require('chai');
const eqArrays = require('../eqArrays');

describe('#eqArrays', ()=>{
  it('[1] and [1, 2] should return false', ()=>{
    const arr1 = [1];
    const arr2 = [1, 2];
    assert.isFalse(eqArrays(arr1, arr2));
  });
  it('[[2, 3], [4]] and [[2, 3], [4]] should return true', ()=>{
    const arr1 = [[2, 3], [4]];
    const arr2 = [[2, 3], [4]];
    assert.isTrue(eqArrays(arr1, arr2));
  });
  it('[[2, 3], [4]] and [[2, 3], [4, 5]] should return false', ()=>{
    const arr1 = [[2, 3], [4]];
    const arr2 = [[2, 3], [4, 5]];
    assert.isFalse(eqArrays(arr1, arr2));
  });
  it('[[2, 3], [4]] and [[2, 3], 4] should return false', ()=>{
    const arr1 = [[2, 3], [4]];
    const arr2 = [[2, 3], 4];
    assert.isTrue(eqArrays(arr1, arr2));
  });
});