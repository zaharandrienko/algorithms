const algorithms = require('./algorithms.js');

test('factorial of 5 shold return 120', () => {
    expect(algorithms.factorial(5)).toBe(120);
  });


test('plus(3, 4) should return 7', () => {
    expect(algorithms.plus(3, 4)).toBe(7);
  });

test('bubble sort should work', () => {
    expect(algorithms.bubbleSort([7,1,2, -5])).toEqual([-5, 1,2,7]);
  });
