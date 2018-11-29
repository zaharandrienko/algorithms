const algorithms = require('./algorithms.js');

test('factorial of 5 shold return 120', () => {
  expect(algorithms.factorial(5)).toBe(120);
});


test('plus(3, 4) should return 7', () => {
  expect(algorithms.plus(3, 4)).toBe(7);
});

test('bubble sort should work', () => {
  expect(algorithms.bubbleSort([7, 1, 2, -5])).toEqual([-5, 1, 2, 7]);
});

test('max should work', () => {
  expect(algorithms.max([7, 1, 2])).toEqual(7);
});

test('dividers should work', () => {
  expect(algorithms.dividers(10)).toEqual([1, 2, 5]);
});
test('checkpalinds should work', () => {
  expect(algorithms.checkPalindrome("aabaa")).toEqual(true);
});



test('adjecent should work', () => {
  expect(algorithms.adjacentElementsProduct([3,3,3,4,5,3])).toEqual(20);
});


test('binary search test', () => {
  expect(algorithms.binarySearch([3,5,7,9,10,33], 7)).toEqual(true);
});




