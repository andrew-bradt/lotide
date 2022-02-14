const assertEqual = require('../assertEqual');
const tail = require('../tail');

const nums = [1, 2, 3];
tail(nums);

assertEqual(tail(['Hello', 'Lighthouse', 'Labs'])[0], ['Lighthouse', 'Labs'][0]);
assertEqual(tail(['Hello', 'Lighthouse', 'Labs'])[1], ['Lighthouse', 'Labs'][1]);
assertEqual(nums.length, 3);
assertEqual(tail([]).length, 0);
assertEqual(tail([1]).length, 0);