describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect(split([2, 9, 5, 4])).toEqual([[2, 9], [5, 4]]);
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    // test the merging algorithm
    expect(mergeSort([[2, 9], [5, 4]])).toEqual([2, 4, 5, 9]);
  });
});
