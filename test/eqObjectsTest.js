const {assert} = require('chai');
const eqObjects = require('../eqObjects');

describe('#eqObjects', ()=>{
  it("{ a:{ {z: 1, b:2 }, { a: { z:1 }, b:2 } should return true", ()=>{
    const obj1 = {
      a: {
        z: 1,
        b: 2
      }
    };
    const obj2 = {
      a: {
        z: 1,
        b: 2
      }
    };
    const actual = eqObjects(obj1, obj2);
    assert.isTrue(actual);
  });
  it("{ a: { y: 0, z: 1 }, b: 2 }, { a: { z : 1}, b: 2 } should return false", ()=>{
    const obj1 = {
      a: {
        y: 0,
        z: 1
      },
      b: 2
    };
    const obj2 = {
      a: {
        z: 1
      },
      b: 2
    };
    const actual = eqObjects(obj1, obj2);
    assert.isFalse(actual);
  });
  it("{ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2} should return false", ()=>{
    const obj1 = {
      a: {
        y: 0,
        z: 1
      },
      b: 1
    };
    const obj2 = {
      a: 1,
      b: 2
    };
    const actual = eqObjects(obj1, obj2);
    assert.isFalse(actual);
  });
});